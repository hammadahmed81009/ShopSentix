const puppeteer = require('puppeteer');

async function scrapeDarazProducts(searchQuery) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const userAgent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
  await page.setUserAgent(userAgent);

  const searchUrl = `https://www.daraz.pk/catalog/?q=${searchQuery}`;
  await page.goto(searchUrl);

  // Wait for the page to load by checking for a specific selector
  await page.waitForSelector('.gridItem--Yd0sa', { timeout: 100000 });

  // Scroll down to trigger loading more products (if any)
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  // Allow time for the additional content to load
  await page.waitForTimeout(100000);

  // Wait for all images to be loaded
  await page.waitForFunction(() => {
    const images = document.querySelectorAll('.mainPic--ehOdr img');
    return Array.from(images).every((img) => img.complete);
  });

  // Extract product details
  const productDetails = await page.evaluate(() => {
    const products = Array.from(document.querySelectorAll('.gridItem--Yd0sa'));

    return products.map((product) => {
      const titleElement = product.querySelector('.title--wFj93 a');
      const productTitle = titleElement
        ? titleElement.textContent
        : 'No title available';
      const productUrl = titleElement
        ? 'https:' + titleElement.getAttribute('href')
        : 'No url available';

      const imageElement = product.querySelector('.mainPic--ehOdr img');
      const imageUrl =
        imageElement?.getAttribute('src') ||
        imageElement?.getAttribute('data-src') ||
        'No image available';

      const currentPriceElement = product.querySelector(
        '.price--NVB62 .currency--GVKjl'
      );
      const currentPrice = currentPriceElement
        ? currentPriceElement.textContent.trim()
        : 'N/A';

      const starRatingElements = product.querySelectorAll(
        '.rating--ZI3Ol .star-icon--k88DV'
      );
      const starRating = starRatingElements.length;

      return {
        Title: productTitle,
        URL: productUrl,
        ImageURL: imageUrl,
        CurrentPrice: currentPrice,
        stars: starRating,
      };
    });
  });

  await browser.close();

  // Return the scraped data
  return productDetails;
}

// Export the function for use in other files
module.exports.scrapeDarazProducts = scrapeDarazProducts;
