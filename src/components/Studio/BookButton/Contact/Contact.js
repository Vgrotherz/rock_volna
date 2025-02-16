import React, { useState } from 'react';
import './contact.scss';

import ContactLoader from '../../../utils/ContactLoader';

function Contact({ handleClickButton, selectedTimeSmall, selectedTimeBig, selectedHallSmall, selectedHallBig, handleRulesClick}) {
  const [formData, setFormData] = useState({
    bandName: '',
    date: '',
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

    // выбор для того какое поле заполнить
    // if (!formData.phoneNumber && !formData.profile) {
    //   alert("Пожалуйста, заполните хотя бы одно из полей: 'Телефон для связи' или 'Ссылка на профиль вк/тг'.");
    //   return;
    // }

    console.log('Form submitted:', formData);
  
    const data = new FormData();
    data.append('bandName', formData.bandName);
    data.append('date', formData.date);
    data.append('phoneNumber', formData.phoneNumber);
    data.append('hall', formData.hall);
    data.append('time', formData.time);
    data.append('message', formData.message);
    data.append('source', 'component1'); // Здесь добавляем параметр source, например для компонента 1 (в гугл скрипте принятие от 3х)
    
    const Sheet_Url = "https://script.google.com/macros/s/AKfycbytUKbO6dkDp2-cU7GpArzIx22cLE0vh_vq0TEaoI1BsuOV3sv264QIj-Ba6dqdxziP/exec";

     // новый на tochkavolna@gmail.com
    // https://script.google.com/macros/s/AKfycbytUKbO6dkDp2-cU7GpArzIx22cLE0vh_vq0TEaoI1BsuOV3sv264QIj-Ba6dqdxziP/exec

    // старый
    // "https://script.google.com/macros/s/AKfycbwV7HKymGXP1kT3KfyHuAIwk1wfx2U1Ovk3m46bxV917lCfJ_v7KgeZ4nTMRKOq-d-D/exec";
 
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
            date: '',
            phoneNumber: '',
            hall: '',
            time: '',
            message: '',
          });
          alert('Принята заявка на бронирование. Администратор свяжется с Вами в течении часа для подтверждения бронирования. Все заявки обрабатываются в течение рабочего дня.')
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
          <div className='input_div band_name_input'>
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
            {/* <div className='phone_choose'> */}
              {/* <p className='or'>или</p> */}
              <div className='input_div phone_input'>
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
                <label htmlFor="date">Желаемая дата:</label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
          {/* </div> */}
          <div className='input_div hall_input'>
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
              placeholder='взять в аренду железо/кардан или иная информация'
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