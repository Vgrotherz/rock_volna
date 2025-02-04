import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { parse } from 'papaparse'; // библиотека для парсинга CSV

const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJa1IQU-ZxYL5sYxLk3kDjKLXMmlodOIQ6BAkIZfpYXimwvTvCjhmdOj80WLJrL5B2ayJ8hslIc3Bt/pub?output=csv';

// старая
// 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQlHKG9Txbs1wOZzrfweQOMp9ZVV7b1hMiDzc1VfILcvSOaeRDpmSUNQf3_bfwEuuHuP-cq16tpdH82/pub?output=csv';
// новая
// https://docs.google.com/spreadsheets/d/e/2PACX-1vTJa1IQU-ZxYL5sYxLk3kDjKLXMmlodOIQ6BAkIZfpYXimwvTvCjhmdOj80WLJrL5B2ayJ8hslIc3Bt/pub?output=csv;

function FetchPriceSmall({ isLoading2, setIsLoading2 }) {
  const [cellData, setCellData] = useState(null); // храним конкретное значение (C1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading2(true);
        const response = await axios.get(`${csvUrl}`);
        const parsedData = parse(response.data, { header: false }); // парсинг CSV без заголовков
        const data = parsedData.data;

        // Проверяем, что данные существуют, и получаем значение C1
        if (data.length > 0 && data[0].length > 2) {
          setCellData(data[0][2]); // C1 находится в первой строке и 3-м столбце (индекс 2)
        } else {
          console.error('Данные пустые или неверный формат');
        }
        setIsLoading2(false);
      } catch (error) {
        console.error('Ошибка при загрузке данных CSV: ', error);
        setIsLoading2(false);
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

  return (
    <>
      {isLoading2 ? (
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

export default FetchPriceSmall;
