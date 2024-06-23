import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { parse } from 'papaparse'; // или другая библиотека для парсинга CSV
import Loading from './Loading';

const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQlHKG9Txbs1wOZzrfweQOMp9ZVV7b1hMiDzc1VfILcvSOaeRDpmSUNQf3_bfwEuuHuP-cq16tpdH82/pub?output=csv';

function FetchCSVSmall() {
  const [csvData, setCsvData] = useState([]);
  const [ isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${csvUrl}`);
        const parsedData = parse(response.data, { header: false }); // парсинг CSV с заголовками
        const dataBlock = parsedData.data.slice(1, 9); // начиная с A2 (вторая строка, индекс 1) до F9 (девятая строка, индекс 8 включительно)
        setCsvData(dataBlock); // сохранение данных в состоянии
        setIsLoading(false);
        console.log(parsedData.data)
      } catch (error) {
        console.error('Error fetching CSV data: ', error);
      }
    };

    fetchData();
  }, []);

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

  return (
    <div className='table_container'>
      {isLoading? (
        <Loading />
      ) : (
        <table className='table_block'>
            <tbody className='tbody_font'>
            {csvData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {}
                {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className='csv_td'>{cleanCell(cell)}</td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
      ) }
      
    </div>
  );
}

export default FetchCSVSmall;
