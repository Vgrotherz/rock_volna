import React, { useState } from 'react';
import './contact.scss';

// import Loading from '../utils/Loading';
// import ContactLoader from '../utils/ContactLoader';
import ContactLoader from '../../../utils/ContactLoader';

function Contact({ handleClickButton, selectedTimeSmall, selectedTimeBig, selectedHallSmall, selectedHallBig, handleRulesClick}) {
  const [formData, setFormData] = useState({
    bandName: '',
    profile: '',
    phoneNumber: '',
    hall: selectedHallSmall || selectedHallBig ||  '',
    time: selectedTimeSmall || selectedTimeBig ||  '',
    message: ''
  });
  const [ loader, setLoader ] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (e) => {
    // Установка значения hall в зависимости от выбранного значения радиокнопки
    setFormData({ ...formData, hall: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  
    const data = new FormData();
    data.append('bandName', formData.bandName);
    data.append('profile', formData.profile);
    data.append('phoneNumber', formData.phoneNumber);
    data.append('hall', formData.hall);
    data.append('time', formData.time);
    data.append('message', formData.message);
    
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
            bandName: '',
            profile: '',
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
            <label htmlFor="profile">Ссылка на профиль вк/тг:</label>
            <input
              type="text"
              id="profile"
              name="profile"
              value={formData.profile}
              onChange={handleChange}
              // required
            />
          </div>
          <div className='input_div'>
            <label htmlFor="phoneNumber">Телефон для связи:</label>
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
          <div className='input_div'>
            <legend>Номер зала:</legend>
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
            <textarea
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className='terms_check'>
            <input
              type="checkbox"
              id="agreedTerms"
              name="terms"
               
              required
            />
            <label for="agreedTerms">Я ознакомился и согласен с <span onClick={handleRulesClick}>правилами</span> посещения репитиционной базы Волна</label>
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