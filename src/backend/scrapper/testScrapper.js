// testScrapper.js
const express = require('express');
const cors = require('cors');
const { scrapeDarazProducts } = require('./WebScrapper');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/search', async (req, res) => {
    const searchQuery = req.body.searchTerm;
    try {
        const productDetails = await scrapeDarazProducts(searchQuery);
        res.json({ products: productDetails });
    } catch (error) {
        console.error('Error during scraping:', error);
        res.status(500).send('Error during scraping');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
