import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { parse } from 'papaparse'; // библиотека для парсинга CSV

const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQlHKG9Txbs1wOZzrfweQOMp9ZVV7b1hMiDzc1VfILcvSOaeRDpmSUNQf3_bfwEuuHuP-cq16tpdH82/pub?output=csv';

function FetchPriceBig({ isLoading, setIsLoading }) {
  const [cellData, setCellData] = useState(null); // храним конкретное значение (C1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${csvUrl}`);
        const parsedData = parse(response.data, { header: false }); // парсинг CSV без заголовков
        const data = parsedData.data;

        // Проверяем, что данные существуют, и получаем значение C1
        if (data.length > 0 && data[0].length > 2) {
          setCellData(data[12][2]); // C13 находится в 13 строке и 3-м столбце (индекс 2)
        } else {
          console.error('Данные пустые или неверный формат');
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Ошибка при загрузке данных CSV: ', error);
        setIsLoading(false);
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

  return (
    <>
      {isLoading ? (
        null
      ) : (
        <div>
          {cellData ? (
            <p>{cleanCell(cellData)}</p>
          ) : (
            null
          )}
        </div>
      )}
    </>
  );
}

export default FetchPriceBig;
