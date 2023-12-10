# WebScraper.py
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.edge.service import Service
from selenium.webdriver.edge.options import Options
import time
import os

def scrape_daraz_products(search_query):
    # Set up the Selenium WebDriver
    user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    edge_driver_path = os.path.join(os.getcwd(), 'msedgedriver.exe') 
    service = Service(edge_driver_path)
    options = Options()
    options.add_argument(f'user-agent={user_agent}')

    # Start the browser
    browser = webdriver.Edge(service=service, options=options)

    # Open the webpage
    search_url = f'https://www.daraz.pk/catalog/?q={search_query}'
    browser.get(search_url)

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
        # Extract product title
        title_element = card.find('div', class_='title--wFj93').find('a')
        product_title = title_element.get_text(strip=True)

        # Extract current price
        current_price_element = card.find('div', class_='price--NVB62')
        current_price = current_price_element.find('span', class_='currency--GVKjl').get_text(strip=True) if current_price_element else 'N/A'

        # Extract star rating
        star_rating_elements = card.find('div', class_='rating--ZI3Ol')
        star_rating = len(star_rating_elements.find_all('i', class_='star-icon--k88DV')) if star_rating_elements else 0

        # Append product details to the list
        product_details.append({
            'Title': product_title,
            'Current Price': current_price,
            'Star Rating': star_rating,
        })

    return product_details
