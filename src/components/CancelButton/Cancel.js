import React, { useState } from 'react';

import ContactLoader from '../utils/ContactLoader';

function Cancel({ handleClickButton }) {
  const [formData, setFormData] = useState({
    cancelBandName: '',
    // cancelEmail: '',
    cancelPhoneNumber: '',
    // cancelHall: '',
    cancelTime: '',
    cancelMessage: ''
  });
  const [ loader, setLoader ] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleRadioChange = (e) => {
  //   // Установка значения hall в зависимости от выбранного значения радиокнопки
  //   setFormData({ ...formData, hall: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  
    const data = new FormData();
    data.append('bandName', formData.cancelBandName);
    // data.append('email', formData.cancelEmail);
    data.append('phoneNumber', formData.cancelPhoneNumber);
    // data.append('hall', formData.cancelHall);
    data.append('time', formData.cancelTime);
    data.append('message', formData.cancelMessage);
    
    const Sheet_Url = "https://script.google.com/macros/s/AKfycbzxAuGLgMCXAdx3sEm7so4LzSbIOLah13aY3JijgDjaUZegr2m47OziR6b2NwgvWOq0/exec";

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
            cancelBandName: '',
            // cancelEmail: '',
            cancelPhoneNumber: '',
            // cancelHall: '',
            cancelTime: '',
            cancelMessage: '',
          });
          alert('Заявка на отмену принята, ожидайте обратной связи от администратора')
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
            <label htmlFor="cancelBandName">Название группы:</label>
            <input
              type="text"
              id="bandName"
              name="bandName"
              value={formData.bandName}
              onChange={handleChange}
              required
            />
          </div>
          {/* <div className='input_div'>
            <label htmlFor="email">Ссылка на профиль вк/тг:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              // required
            />
          </div> */}
          <div className='input_div'>
            <label htmlFor="cancelPhoneNumber">Телефон для связи:</label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              maxlength="11" size="11"
              required
            />
          </div>
          {/* <div className='input_div'>
            <legend>Занятый зал:</legend>
            <div className='radio_btns'>
              <label htmlFor="hall1">1</label>
              <input className='radio_circle'
                type="radio"
                id="hall1"
                name="hall"
                value="1"
                checked={formData.hall === "1"}
                onChange={handleRadioChange}
              />
              <label htmlFor="hall2">2</label>
              <input className='radio_circle'
                type="radio"
                id="hall2"
                name="hall"
                value="2"
                checked={formData.hall === "2"}
                onChange={handleRadioChange}
              />
            </div>
          </div> */}
          <div className='input_div'>
          <label htmlFor="time">Занятое время и день:</label>
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
            <textarea
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className='terms_check cancel_check'>
            <input
              type="checkbox"
              id="agreedCancelTerms"
              name="terms"
               
              required
            />
            <label for="agreedCancelTerms">Я подтверждаю, что в случае, если отмена была позднее чем за сутки, то я обязусь оплатить ранее зянятое мною время в полном объёме. В противном случае группа попадает в чёрный список </label>
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

export default Cancel;