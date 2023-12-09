from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.edge.service import Service
from selenium.webdriver.edge.options import Options
import time
import sys
import os

# Set up the Selenium WebDriver
user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
edge_driver_path = os.path.join(os.getcwd(), 'msedgedriver.exe') 
service = Service(edge_driver_path)
options = Options()
options.add_argument(f'user-agent={user_agent}')

# Start the browser
browser = webdriver.Edge(service=service, options=options)

# Open the webpage
browser.get('https://www.daraz.pk/catalog/?q=huawei+y7')

# Wait for the page to load
time.sleep(5)  # Sleep may be necessary to wait for the page to load completely

# Get the HTML source of the page
html_source = browser.page_source

# Close the browser
browser.quit()

# Parse the HTML using BeautifulSoup
soup = BeautifulSoup(html_source, 'html.parser')

# Find all product cards
product_cards = soup.find_all('div', class_='gridItem--Yd0sa')

# Prepare a list to hold product details
product_details = []

# Loop through each product card and extract information
for card in product_cards:
    # Extract product title and URL
    title_element = card.find('div', class_='title--wFj93').find('a')
    product_title = title_element.get_text(strip=True)
    product_url = 'https:' + title_element['href']

    # Extract image URL
    image_element = card.find('div', class_='mainPic--ehOdr').find('img')
    image_url = 'https:' + image_element['src'] if image_element else 'No image available'

    # Extract current price
    current_price_element = card.find('div', class_='price--NVB62')
    current_price = current_price_element.find('span', class_='currency--GVKjl').get_text(strip=True) if current_price_element else 'N/A'

    # Extract original price
    original_price_element = card.find('span', class_='origPrice--AJxRs')
    original_price = original_price_element.get_text(strip=True) if original_price_element else 'N/A'

    # Extract star rating
    star_rating_elements = card.find('div', class_='rating--ZI3Ol')
    star_rating = len(star_rating_elements.find_all('i', class_='star-icon--k88DV')) if star_rating_elements else 0

    # Extract number of reviews
    number_of_reviews_element = card.find('span', class_='rating__review--ygkUy')
    number_of_reviews = number_of_reviews_element.get_text(strip=True) if number_of_reviews_element else '(0)'

    # Append product details to the list
    product_details.append({
        'Title': product_title,
        'URL': product_url,
        'Image URL': image_url,
        'Current Price': current_price,
        'Original Price': original_price,
        'Star Rating': star_rating,
        'Number of Reviews': number_of_reviews,
    })

sys.stdout.reconfigure(encoding='utf-8')
    # Print the extracted information
for product in product_details:
    print(f"Product Title: {product['Title']}")
    print(f"Product URL: {product['URL']}")
    print(f"Image URL: {product['Image URL']}")
    print(f"Current Price: {product['Current Price']}")
    print(f"Original Price: {product['Original Price']}")
    print(f"Star Rating: {'⭐' * product['Star Rating']} ({product['Star Rating']} stars)")
    print(f"Number of Reviews: {product['Number of Reviews']}")
    print('---')
