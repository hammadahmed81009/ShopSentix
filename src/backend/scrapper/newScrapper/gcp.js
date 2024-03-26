// const { google } = require('googleapis');
// const express = require('express');

// const app = express();

// app.get('/', async (req, res) => {
//   const auth = new google.auth.GoogleAuth({
//     keyFile: 'credentials.json',
//     scopes: 'https://www.googleapis.com/auth/spreadsheets',
//   });

//   // create client instance for auth
//   const client = await auth.getClient();

//   // create instance of google sheets API
//   const googleSheets = google.sheets({
//     version: 'v4',
//     auth: client,
//   });

//   const spreadsheetID = '1TvMTE_pCezyj-_urtC99IjQPVp05bhmPjZDQYXEdvuI';

//   // get metadata about spreadsheet
//   const metaData = await googleSheets.spreadsheets.get({
//     auth: auth,
//     spreadsheetId: spreadsheetID,
//   });

//   // Read rows from spreadsheet
//   const getRows = await googleSheets.spreadsheets.values.get({
//     auth: auth,
//     spreadsheetId: spreadsheetID,
//     range: 'daraz_api!C:F',
//   });

//   // Check if values exist and then remove the 0th index (header row)
//   const dataWithoutHeader = getRows.data.values
//     ? getRows.data.values.slice(1)
//     : [];

//   const modifiedData = {
//     values: dataWithoutHeader.map((row) => ({
//       Title: row[0],
//       URL: {},
//       ImageURL: row[3],
//       CurrentPrice: row[1],
//       stars: row[2],
//     })),
//   };
//   res.send(modifiedData);
// });

// app.listen(1337, (req, res) => {
//   console.log('running on 1337');
// });
const { google } = require('googleapis');

async function fetchDataFromGoogleSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });

  // create client instance for auth
  const client = await auth.getClient();

  // create instance of google sheets API
  const googleSheets = google.sheets({
    version: 'v4',
    auth: client,
  });

  const spreadsheetID = '1pWH1cKzglCfhqbdJQ8uhcDYkNoACVgD3AA6J3XsY210';

  // Read rows from spreadsheet
  const getRows = await googleSheets.spreadsheets.values.get({
    auth: auth,
    spreadsheetId: spreadsheetID,
    range: 'daraz_api_call!C:F',
  });

  // Check if values exist and then remove the 0th index (header row)
  const dataWithoutHeader = getRows.data.values
    ? getRows.data.values.slice(1)
    : [];

  const modifiedData = {
    values: dataWithoutHeader.map((row) => ({
      Title: row[0],
      URL: {},
      ImageURL: row[3],
      CurrentPrice: row[1],
      stars: row[2],
    })),
  };

  console.log(modifiedData);

  return modifiedData;
}

module.exports = fetchDataFromGoogleSheets;
