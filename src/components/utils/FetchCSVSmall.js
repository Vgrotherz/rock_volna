import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { parse } from 'papaparse'; // или другая библиотека для парсинга CSV
import Loading from './Loading';

const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQlHKG9Txbs1wOZzrfweQOMp9ZVV7b1hMiDzc1VfILcvSOaeRDpmSUNQf3_bfwEuuHuP-cq16tpdH82/pub?output=csv';

function FetchCSVSmall({isLoading2, setIsLoading2, onCellClickSmall}) {
  const [csvData, setCsvData] = useState([]);
  // const [ isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading2(true);
        const response = await axios.get(`${csvUrl}`);
        const parsedData = parse(response.data, { header: false }); // парсинг CSV с заголовками
        const data = parsedData.data;

        // Выбираем строки с 2 по 9 (индексы с 1 по 8)
        const selectedRows = data.slice(1, 9);

        // Выбираем столбцы с A по F (индексы с 0 по 5) для каждой строки
        const dataBlock = selectedRows.map(row => row.slice(0, 6));

        setCsvData(dataBlock); // сохранение данных в состоянии
        setIsLoading2(false);
        // console.log('small hall data', dataBlock)
      } catch (error) {
        console.error('Error fetching CSV data: ', error);
      }
    };

    fetchData();
  }, [setIsLoading2]);

  const cleanCell = (cell) => {
    // Убираем лишние пробелы и заменяем \n на <br />
    const cleaned = cell.trim().replace(/ {2,}/g, ' ');
    return cleaned.split('\n').map((item, index) => (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    ));
  };

  const handleCellClickSmall = (day, time, cell) => {
    if (!cell.trim()) {
      // Trigger the callback with formatted time (e.g., "пн с 12-14")
      onCellClickSmall(`${day} с ${time}`);
    }
  };

  return (
    <div className='table_container referenceWidth'>
      {isLoading2 ? (
        <Loading />
      ) : (
        <table className='table_block'>
          <tbody className='tbody_font'>
            {csvData.map((row, rowIndex) => {
              // Extract day from the first cell of each row
              const day = row[0];
              return (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => {
                    const isFirstCell = cellIndex === 0;
                    const time = !isFirstCell ? csvData[0][cellIndex] : ''; // Get time from the first row
                    return (
                      <td
                        key={cellIndex}
                        className={`csv_td ${!cell.trim() && !isFirstCell ? 'clickable' : ''}`} // Highlight clickable cells
                        onClick={() =>
                          !cell.trim() && !isFirstCell && handleCellClickSmall(day, time, cell)
                        }
                      >
                        {cleanCell(cell)}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}


export default FetchCSVSmall;
