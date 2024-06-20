import React, { useState, useEffect } from 'react';
import { google } from 'googleapis';

import credition from './client_secret_571555316259-660uaprfe4ag44l2vlgpieduiju7kriu.apps.googleusercontent.com.json';
// console.log(credition);

const FetchGoogleSheet = () => {
  const [sheetData, setSheetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const auth = new google.auth.GoogleAuth({
          keyFile: credition,
          scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });
        
        const sheets = google.sheets({ version: 'v4', auth });
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId: '18QIkXcamVI423B0H0yyafz1zmjmFsWRu0mMEp4u6iF0', // то что находится между d/ и /edit в данном случае тут https://docs.google.com/spreadsheets/d/18QIkXcamVI423B0H0yyafz1zmjmFsWRu0mMEp4u6iF0/edit?gid=0#gid=0
          range: 'Sheet1!A1:D18', // Specify the range of cells you want to retrieve
        });

        const data = response.data.values;
        if (data.length) {
          setSheetData(data);
        } else {
          console.log('No data found.');
        }
      } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Google Sheets Data</h2>
      <ul>
        {sheetData.map((row, index) => (
          <li key={index}>
            {row.join(' | ')} {/* Displaying each row as a string */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchGoogleSheet;
