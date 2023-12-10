import sys
import json
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.edge.service import Service
from selenium.webdriver.edge.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import os

def scrape_daraz_products(search_query):
    user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    edge_driver_path = os.path.join(os.getcwd(), 'msedgedriver.exe') 
    service = Service(edge_driver_path)
    options = Options()
    options.add_argument(f'user-agent={user_agent}')
    options.add_argument('--headless')

    browser = webdriver.Edge(service=service, options=options)

    search_url = f'https://www.daraz.pk/catalog/?q={search_query}'
    browser.get(search_url)

    # Wait for the page to load
    WebDriverWait(browser, 10).until(EC.presence_of_element_located((By.CLASS_NAME, 'gridItem--Yd0sa')))

    # Scroll down to trigger loading more products (if any)
    browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    # Allow time for the additional content to load
    time.sleep(5)

    # Use BeautifulSoup for initial parsing
    soup = BeautifulSoup(browser.page_source, 'html.parser')

    product_cards = soup.find_all('div', class_='gridItem--Yd0sa')

    product_details = []

    for card in product_cards:
        title_element = card.find('div', class_='title--wFj93').find('a')
        product_title = title_element.get_text(strip=True)
        product_url = 'https:' + title_element['href']

        # Use WebDriverWait to wait for the image element to be visible
        image_element = WebDriverWait(browser, 10).until(
            EC.visibility_of_element_located((By.XPATH, './/div[@class="mainPic--ehOdr"]//img'))
        )
        
        # Check if the image URL is in 'src' attribute, otherwise check 'data-src'
        image_url = image_element.get_attribute('src') or image_element.get_attribute('data-src') or 'No image available'

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

    browser.quit()

    print(json.dumps(product_details))

# Retrieve the search query from command-line arguments
search_query = sys.argv[1] if len(sys.argv) > 1 else 'default_query'

scrape_daraz_products(search_query)
