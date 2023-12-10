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
  await page.waitForSelector('.gridItem--Yd0sa', { timeout: 10000 });

  // Scroll down to trigger loading more products (if any)
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  // Allow time for the additional content to load
  await page.waitForTimeout(10000);

  // Extract product details
  const productDetails = await page.evaluate(() => {
    const products = Array.from(document.querySelectorAll('.gridItem--Yd0sa'));

    return products.map((product) => {
      const titleElement = product.querySelector('.title--wFj93 a');
      const productTitle = titleElement.textContent;
      const productUrl = 'https:' + titleElement.getAttribute('href');

      const imageElement = product.querySelector('.mainPic--ehOdr img');
      const imageUrl = imageElement?.getAttribute('src') || imageElement?.getAttribute('data-src') || 'No image available';

      const currentPriceElement = product.querySelector('.price--NVB62 .currency--GVKjl');
      const currentPrice = currentPriceElement ? currentPriceElement.textContent.trim() : 'N/A';

      const starRatingElements = product.querySelectorAll('.rating--ZI3Ol .star-icon--k88DV');
      const starRating = starRatingElements.length;

      return {
        Title: productTitle,
        URL: productUrl,
        'Image URL': imageUrl,
        'Current Price': currentPrice,
        'Star Rating': starRating,
      };
    });
  });

  await browser.close();

  console.log(JSON.stringify(productDetails));
}
// Export the function for use in other files
module.exports.scrapeDarazProducts = scrapeDarazProducts;
