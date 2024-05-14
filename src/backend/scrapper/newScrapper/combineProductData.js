const fs = require('fs');
const path = require('path');

function combineProductData() {
  const filePath = path.join(__dirname, 'product_scrapingjob.json');
  const rawData = fs.readFileSync(filePath);
  const dataLines = rawData.toString().split('\n').filter(line => line.trim() !== '');

  const products = [];

  for (let i = 0; i < dataLines.length; i += 4) {
    const titleRow = JSON.parse(dataLines[i]);
    const priceImageRow = JSON.parse(dataLines[i + 1]);
    const ratingRow = JSON.parse(dataLines[i + 2]);
    const linkRow = JSON.parse(dataLines[i + 3]);

    const product = {
      Title: titleRow.title,
      CurrentPrice: priceImageRow.price,
      ImageURL: priceImageRow['image-src'],
      stars: ratingRow.rating,
      URL: linkRow['id-a-link-href'],
    };

    products.push(product);
  }

  return { values: products };
}

module.exports = combineProductData;
