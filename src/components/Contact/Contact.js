import React, { useState } from 'react';
import './contact.css';

// import Loading from '../utils/Loading';
import ContactLoader from '../utils/ContactLoader';

function Contact({ handleClickButton, selectedTimeSmall, selectedTimeBig }) {
  const [formData, setFormData] = useState({
    bandName: '',
    email: '',
    phoneNumber: '',
    // hall: '',
    time: selectedTimeSmall || selectedTimeBig ||  '',
    message: ''
  });
  const [ loader, setLoader ] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (e) => {
    // Установите значение hall в зависимости от выбранного значения радиокнопки
    setFormData({ ...formData, hall: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  
    const data = new FormData();
    data.append('bandName', formData.bandName);
    data.append('email', formData.email);
    data.append('phoneNumber', formData.phoneNumber);
    data.append('hall', formData.hall);
    data.append('time', formData.time);
    data.append('message', formData.message);
  
    const Sheet_Url = "https://script.google.com/macros/s/AKfycbykAhdWMx2qqy3vlBe2QJOtMcBtQPttjMH2mvp_xFJjgW-1p-Cj3Bsfm-BA5emOwhWH/exec";
    
    try {
      setLoader(true);
      const response = await fetch(Sheet_Url, {
        method: 'POST',
        body: data,
        muteHttpExceptions: true,
      });
      
      const result = await response.json();
      console.log('Response:', result);

      if (result.result === 'success') {
        setFormData({
            ...formData,
            bandName: '',
            email: '',
            phoneNumber: '',
            hall: '',
            time: '',
            message: '',
          });
          alert('Запись принята, ожидайте обратной связи от администратора')
          handleClickButton();
          setFormData(false);
      } else {
        setFormData(false);
        console.error('Error:', result.error);
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      { !loader? (
        <header className='header_form'>
        <form onSubmit={handleSubmit} className='contact_form'>
          <div className='input_div'>
            <label htmlFor="bandName">Название группы:</label>
            <input
              type="text"
              id="bandName"
              name="bandName"
              value={formData.bandName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input_div'>
            <label htmlFor="email">Ссылка на профиль вк/тг:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input_div'>
            <label htmlFor="phoneNumber">Телефон для связи:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input_div'>
            <legend>Номер зала:</legend>
            <label htmlFor="hall1">1</label>
            <input
              type="radio"
              id="hall1"
              name="hall"
              value="1"
              checked={formData.hall === "1"}
              onChange={handleRadioChange}
            />
            <label htmlFor="hall2">2</label>
            <input
              type="radio"
              id="hall2"
              name="hall"
              value="2"
              checked={formData.hall === "2"}
              onChange={handleRadioChange}
            />
          </div>
          <div className='input_div'>
          <label htmlFor="time">Желаемое время и день:</label>
            <input
              type="text"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />

          </div>
          <div className='input_div'>
            <label htmlFor="message">Доп информация:</label>
            <input
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button className='button-30' type="submit">Отправить</button>
        </form>
      </header>
      ) : (
        <>
          <ContactLoader />
        </>
      )}
      
    </div>
  );
}

export default Contact;