import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { parse } from 'papaparse'; // или другая библиотека для парсинга CSV

import LoaderGears from './LoaderGears';

const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQlHKG9Txbs1wOZzrfweQOMp9ZVV7b1hMiDzc1VfILcvSOaeRDpmSUNQf3_bfwEuuHuP-cq16tpdH82/pub?output=csv';

function FetchCSVBig({isLoading, setIsLoading, onCellClickBig}) {
  const [csvData, setCsvData] = useState([]);
  // const [ isLoading, setIsLoading] = useState(false);


  useEffect(() => {

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${csvUrl}`);
        const parsedData = parse(response.data, { header: false }); // парсинг CSV с заголовками
        
        const data = parsedData.data;

        // Выбираем строки с 2 по 9 (индексы с 1 по 8)
        const selectedRows = data.slice(15, 23);

        // Выбираем столбцы с A по F (индексы с 0 по 5) для каждой строки
        const dataBlock = selectedRows.map(row => row.slice(0, 6));
        
        
        setCsvData(dataBlock); // сохранение данных в состоянии
        setIsLoading(false);
        // console.log('big hall data', dataBlock)
      } catch (error) {
        console.error('Error fetching CSV data: ', error);
      }
    };

    fetchData();
  }, [setIsLoading]);

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

  const handleCellClickBig = (day, time, cell) => {
    if (!cell.trim()) {
      // Trigger the callback with formatted time (e.g., "пн с 12-14")
      onCellClickBig(`${day} с ${time}`)
    }
  };



  return (
    <div className='table_container referenceWidth'>
      {isLoading? (
                      <LoaderGears />
                    ) : (null)
                    }
      {/* Статическая таблица с фиксированной структурой */}
      <table className='table_block'>
        <tbody className='tbody_font' >
          {/* Строка с часами */}
          <tr>
            <td className="csv_td td_one"></td>
            <td className="csv_td">12-14</td>
            <td className="csv_td">14-16</td>
            <td className="csv_td">16-18</td>
            <td className="csv_td">18-20</td>
            <td className="csv_td">20-22</td>
          </tr>

          {/* Строки для дней недели */}
          {['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].map((day, rowIndex) => (
            <tr key={rowIndex}>
              {/* Первая ячейка — день недели */}
              <td className="csv_td td_one">{day}</td>

              {/* Остальные ячейки */}
              {[0, 1, 2, 3, 4].map((colIndex) => {
                const cellData = csvData[rowIndex]?.[colIndex + 1] || ''; // Данные из CSV
                const isClickable = !cellData.trim(); // Если ячейка пустая
                const time = ['12-14', '14-16', '16-18', '18-20', '20-22'][colIndex];

                return (
                  <>
                    <td
                      key={colIndex}
                      className={`csv_td ${isClickable ? 'clickable' : ''}`}
                      onClick={() => isClickable && handleCellClickBig(day, time, cellData)}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {isLoading ? '...' : cleanCell(cellData)}
                      </motion.div>
                    </td>
                  </>
                  

                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchCSVBig;
