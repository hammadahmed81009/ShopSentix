const api = require('@webscraperio/api-client-nodejs');
const Client = api.Client;
const path = require('path');
const fs = require('fs');
const gcp = require('./gcp');

const client = new Client({
  token: '7xJhJkxbZagaF5rwplWQlBaP0S6xiJIVPXNdEYv5C4IrdkXzfRUthhc39KhT',
  useBackoffSleep: false,
});

// Function to check if sitemap exists and update if necessary
async function checkSitemapExists(sitemapData) {
  const filePath = path.join(__dirname, 'toCompareSitemap.js');

  try {
    const existingSitemap = require(filePath);

    const existingSitemapString = JSON.stringify(existingSitemap);
    const newSitemapString = JSON.stringify(sitemapData);

    if (existingSitemapString === newSitemapString) {
      return true;
    } else {
      fs.writeFileSync(
        filePath,
        `module.exports = ${JSON.stringify(sitemapData, null, 2)};\n`
      );
      return false;
    }
  } catch (error) {
    fs.writeFileSync(
      filePath,
      `module.exports = ${JSON.stringify(sitemapData, null, 2)};\n`
    );
    return false;
  }
}

// Function to create sitemap if it doesn't exist or return sitemapID if it does
async function createSitemapIfNotExists(sitemapData) {
  const exists = await checkSitemapExists(sitemapData);
  if (!exists) {
    console.log('Sitemap does not exist. Creating new sitemap.');

    const sitemapID = require('./toCompareId').sitemapID;
    if (sitemapID) {
      console.log('Sitemap FETCHED.', sitemapID);
      const response = await client.updateSitemap(
        sitemapID,
        JSON.stringify(sitemapData)
      );
      console.log('RESPONE ID:  ', response.id);
      console.log('RESPONSE: ', response);
      return response.id;
    } else {
      throw new Error('Invalid sitemapID in toCompareId.js');
    }
  } else {
    console.log(
      'Sitemap already exists. Retrieving sitemapID from toCompareId.js.'
    );
    try {
      const sitemapID = require('./toCompareId').sitemapID;
      await client.updateSitemap(sitemapID, JSON.stringify(sitemapData));
      if (sitemapID) {
        return sitemapID;
      } else {
        throw new Error('Invalid sitemapID in toCompareId.js');
      }
    } catch (error) {
      console.error('Error retrieving sitemapID from toCompareId.js:', error);
      throw error;
    }
  }
}

async function createAndRunScrapingJob(sitemapId) {
  console.log('Creating and running scraping job for sitemap:', sitemapId);
  const scrapingJob = await client.createScrapingJob({
    sitemap_id: sitemapId,
    driver: 'fulljs',
    page_load_delay: 2000,
    request_interval: 2000,
    proxy: 1,
    custom_id: 'daraz-scrapping',
  });

  console.log('Scraping job created:', scrapingJob);
  console.log(scrapingJob);

  const outputFile = path.join(__dirname, `${sitemapId}_scrapingjob.json`);
  await client.downloadScrapingJobJSON(scrapingJob.id, outputFile);
  console.log('Data scrapped and saved to:', outputFile);
}

async function createOrUpdateSitemapAndRunScrapingJob(productName) {
  const baseUrl = 'https://www.daraz.pk/catalog/?q=';
  const searchQuery = encodeURIComponent(productName); // Encode the product name to ensure a valid URL
  const searchUrl = `${baseUrl}${searchQuery}`;

  const sitemap = {
    _id: 'daraz_api_call',
    startUrl: [searchUrl],
    selectors: [
      {
        id: 'title',
        multiple: false,
        parentSelectors: ['cardFinal'],
        regex: '',
        selector: 'div.title-wrapper--IaQ0m',
        type: 'SelectorText',
      },
      {
        id: 'price',
        multiple: false,
        parentSelectors: ['cardFinal'],
        regex: '',
        selector: 'span.currency--GVKjl',
        type: 'SelectorText',
      },
      {
        id: 'cardFinal',
        multiple: true,
        parentSelectors: ['_root'],
        selector: 'div.gridItem--Yd0sa',
        type: 'SelectorElement',
      },
      {
        id: 'reviews',
        multiple: true,
        parentSelectors: ['cardFinal'],
        regex: '',
        selector: 'span.ratig-num--KNake',
        type: 'SelectorText',
      },
      {
        id: 'image',
        multiple: false,
        parentSelectors: ['cardFinal'],
        selector: 'img',
        type: 'SelectorImage',
      },
    ],
  };

  const sitemapResponse = await createSitemapIfNotExists(sitemap);
  await createAndRunScrapingJob(sitemapResponse);

  const getGCPvalues = gcp();
  return getGCPvalues;
}

module.exports.scrapeDarazProducts = createOrUpdateSitemapAndRunScrapingJob;
// createOrUpdateSitemapAndRunScrapingJob("laptop").catch((error) => {
//   console.error("An error occurred:", error);
// });
