const { google } = require('googleapis');

async function fetchReviewsFromGoogleSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Create instance of Google Sheets API
  const googleSheets = google.sheets({
    version: 'v4',
    auth: client,
  });

  const spreadsheetID = '1mXsWtn8F9x4PAULlKv-kbtgp2M5hwNCoCgPvHO_5m5U';

  // Read rows from spreadsheet
  const getRows = await googleSheets.spreadsheets.values.get({
    auth: auth,
    spreadsheetId: spreadsheetID,
    range: 'reviews!C:C', // Adjust the range to only include the review column
  });

  // Check if values exist and then remove the 0th index (header row)
  const dataWithoutHeader = getRows.data.values ? getRows.data.values.slice(1) : [];

  const reviews = dataWithoutHeader.map(row => row[0]); // Only take the review text

  const modifiedData = { values: reviews };

  console.log(modifiedData);

  return modifiedData;
}

module.exports = fetchReviewsFromGoogleSheets;
