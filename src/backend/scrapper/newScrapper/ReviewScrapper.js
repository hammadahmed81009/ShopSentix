const api = require("@webscraperio/api-client-nodejs");
const Client = api.Client;
const path = require("path");
const fs = require("fs");

const client = new Client({
  token: "VA78W0fpZL3yIzsfsB1ApqvMUfga0YuaKbhkGZkL8rLbdRlQfrFxjVZmoNj1",
  useBackoffSleep: false,
});

function delay(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

async function checkReviewSitemapExists(sitemapData) {
  const filePath = path.join(__dirname, "ReviewSitemap.js");

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

async function createReviewSitemapIfNotExists(sitemapData) {
  const exists = await checkReviewSitemapExists(sitemapData);
  if (!exists) {
    console.log("Review Sitemap does not exist. Creating new sitemap.");

    const sitemapID = require("./ReviewId").sitemapID;
    if (sitemapID) {
      console.log("Review Sitemap FETCHED.", sitemapID);
      const response = await client.updateSitemap(
        sitemapID,
        JSON.stringify(sitemapData)
      );
      console.log("RESPONE ID:  ", response.id);
      console.log("RESPONSE: ", response);
      return response.id;
    } else {
      throw new Error("Invalid sitemapID in ReviewId.js");
    }
  } else {
    console.log(
      "Review Sitemap already exists. Retrieving sitemapID from ReviewId.js."
    );
    try {
      const sitemapID = require("./ReviewId").sitemapID;
      await client.updateSitemap(sitemapID, JSON.stringify(sitemapData));
      if (sitemapID) {
        return sitemapID;
      } else {
        throw new Error("Invalid sitemapID in ReviewId.js");
      }
    } catch (error) {
      console.error("Error retrieving sitemapID from ReviewId.js:", error);
      throw error;
    }
  }
}

async function createAndRunReviewScrapingJob(sitemapId) {
  console.log("Creating and running review scraping job for sitemap:", sitemapId);
  const scrapingJob = await client.createScrapingJob({
    sitemap_id: sitemapId,
    driver: "fulljs",
    page_load_delay: 2000,
    request_interval: 2000,
    proxy: 1,
    custom_id: "daraz-review-scrapping",
  });

  console.log("Review scraping job created:", scrapingJob);
  console.log(scrapingJob);

  const outputFile = path.join(__dirname, `${sitemapId}_review_scrapingjob.json`);
  await client.downloadScrapingJobJSON(scrapingJob.id, outputFile);
  console.log("Review data scraped and saved to:", outputFile);
}

function combineReviewData() {
  const filePath = path.join(__dirname, 'review_scrapingjob.json');
  const rawData = fs.readFileSync(filePath);
  const dataLines = rawData.toString().split('\n').filter(line => line.trim() !== '');

  const reviews = dataLines.map(line => {
    const reviewRow = JSON.parse(line);
    return reviewRow.review;
  });

  return { reviews };
}

async function scrapeDarazReviews(productUrl) {
  const reviewSitemap = {
    _id: "reviewSitemap",
    startUrl: [productUrl],
    selectors: [
      {
        id: "review",
        parentSelectors: ["_root"],
        type: "SelectorText",
        selector: "div.review-content-sl",
        multiple: true,
        regex: "",
      },
    ],
  };

  const sitemapResponse = await createReviewSitemapIfNotExists(reviewSitemap);
  await createAndRunReviewScrapingJob(sitemapResponse);

  await delay(120000);

  const combinedReviews = combineReviewData();
  console.log(combinedReviews);
  return combinedReviews;
}

module.exports.scrapeDarazReviews = scrapeDarazReviews;
