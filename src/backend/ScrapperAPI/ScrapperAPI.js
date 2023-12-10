const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeDarazProducts(searchQuery) {
  try {
    // Set up the user agent and search URL
    const userAgent =
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
    const searchUrl = `https://www.daraz.pk/catalog/?q=${encodeURIComponent(searchQuery)}`;

    // Make the HTTP request
    const response = await axios.get(searchUrl, {
      headers: {
        'User-Agent': userAgent,
      },
    });

    // Load HTML content using cheerio
    const $ = cheerio.load(response.data);

    // Find all product cards
    const productCards = $('div.gridItem--Yd0sa');

    // Prepare a list to hold product details
    const productDetails = [];

    // Loop through each product card and extract information
    productCards.each((index, element) => {
      const card = $(element);

      // Extract product title
      const titleElement = card.find('div.title--wFj93 a');
      const productTitle = titleElement.text().trim();

      // Extract current price
      const currentPriceElement = card.find('div.price--NVB62');
      const currentPrice = currentPriceElement.find('span.currency--GVKjl').text().trim() || 'N/A';

      // Extract star rating
      const starRatingElements = card.find('div.rating--ZI3Ol');
      const starRating = starRatingElements.find('i.star-icon--k88DV').length;

      // Append product details to the list
      productDetails.push({
        Title: productTitle,
        'Current Price': currentPrice,
        'Star Rating': starRating,
      });
    });

    return productDetails;
  } catch (error) {
    console.error('Error:', error.message);
    return [];
  }
}

// Example usage
const searchQuery = 'your_search_query';
scrapeDarazProducts(searchQuery).then((result) => {
  console.log(result);
});
