# WebScrapper.py
import sys
import json
import base64
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.edge.service import Service
from selenium.webdriver.edge.options import Options
import time
import os

def scrape_daraz_products(search_query):
    user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    edge_driver_path = os.path.join(os.getcwd(), 'msedgedriver.exe') 
    service = Service(edge_driver_path)
    options = Options()
    options.add_argument(f'user-agent={user_agent}')

    browser = webdriver.Edge(service=service, options=options)

    search_url = f'https://www.daraz.pk/catalog/?q={search_query}'
    browser.get(search_url)

    time.sleep(3)

    html_source = browser.page_source

    browser.quit()

    soup = BeautifulSoup(html_source, 'html.parser')

    product_cards = soup.find_all('div', class_='gridItem--Yd0sa')

    product_details = []

    for card in product_cards:
        title_element = card.find('div', class_='title--wFj93').find('a')
        product_title = title_element.get_text(strip=True)
        product_url = 'https:' + title_element['href']

        image_element = card.find('div', class_='mainPic--ehOdr').find('img')
        raw_image_url = image_element.get('src', '') if image_element else 'No image available'
        image_url = process_image_url(raw_image_url)

        current_price_element = card.find('div', class_='price--NVB62')
        current_price = current_price_element.find('span', class_='currency--GVKjl').get_text(strip=True) if current_price_element else 'N/A'

        star_rating_elements = card.find('div', class_='rating--ZI3Ol')
        star_rating = len(star_rating_elements.find_all('i', class_='star-icon--k88DV')) if star_rating_elements else 0

        product_details.append({
            'Title': product_title,
            'URL': product_url,
            'Image URL': image_url,
            'Current Price': current_price,
            'Star Rating': star_rating,
        })

    print(json.dumps(product_details))

def process_image_url(raw_image_url):
    if raw_image_url.startswith('//'):
        if raw_image_url.startswith('https:data:image'):
            # Handle base64 image data
            return decode_base64_image(raw_image_url)
        else:
            # Handle regular image URL
            return 'https:' + raw_image_url
    else:
        # Return the original image URL
        return raw_image_url

# Function to decode base64 image data
def decode_base64_image(data_url):
    _, base64_data = data_url.split(',', 1)
    binary_data = base64.b64decode(base64_data)

    # Save the binary data to a file
    image_filename = 'decoded_image.jpg'
    with open(image_filename, 'wb') as file:
        file.write(binary_data)

    return image_filename  # You can return the image filename or the binary_data as needed


# Retrieve the search query from command-line arguments
search_query = sys.argv[1] if len(sys.argv) > 1 else 'default_query'

scrape_daraz_products(search_query)
