import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchGoogleSheet = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const sheetId = '1v9ygUCPBD91EkNX3pfYqFvbKl5yhhXhpF75zr7WfKps';
      const apiKey = 'AIzaSyACS5PzmLoxQQSIXBazKwtrnl-EUzykZ-g';
      const range = 'Sheet1!A1:E10'; // Простое имя листа и диапазон

      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

      console.log(`Fetching data from URL: ${url}`);

      try {
        const response = await axios.get(url);
        console.log('Response data:', response.data);
        setData(response.data.values);
      } catch (error) {
        if (error.response) {
          console.error('Error fetching data from Google Sheets:', error.response.data);
          console.log('Error status:', error.response.status);
          console.log('Error headers:', error.response.headers);
        } else {
          console.error('Error fetching data from Google Sheets:', error.message);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Google Sheets Data</h1>
      {/* <table>
        <thead>
          <tr>
            {data[0] && data[0].map((header, index) => <th key={index}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default FetchGoogleSheet;