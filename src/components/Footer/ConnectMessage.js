import React, { useState } from 'react';

import ContactLoader from '../utils/ContactLoader';

function ConnectMessage({ handleClickButton, handleBlackRulesClick }) {
  const [formData, setFormData] = useState({
    connectName: '',
    connectMessage: ''
  });
  const [ loader, setLoader ] = useState(false);
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancelSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  
    const data = new FormData();
    data.append('connectName', formData.connectName);
    data.append('cancelPhoneNumber', formData.cancelPhoneNumber);
    data.append('cancelTime', formData.cancelTime);
    data.append('connectMessage', formData.connectMessage);
    data.append('source', 'component2'); // Здесь добавляем параметр source, например для компонента 2
    
    const Sheet_Url = "https://script.google.com/macros/s/AKfycbxQcEBIrYsOgAffX4M7Z0o4z3HTTbDxPdKmlJ6UuwA6XEWab-Ze5IISGKX_jP3ECOYF/exec";

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
            cancelPhoneNumber: '',
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
        <form onSubmit={handleCancelSubmit} className='contact_form'>
          <div className='input_div'>
            <label htmlFor="cancelBandName">Название группы:</label>
            <input
              type="text"
              id="cancelBandName"
              name="cancelBandName"
              value={formData.cancelBandName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input_div'>
            <label htmlFor="cancelPhoneNumber">Телефон для связи:</label>
            <input
              type="number"
              id="cancelPhoneNumber"
              name="cancelPhoneNumber"
              value={formData.cancelPhoneNumber}
              onChange={handleChange}
              maxlength="11" size="11"
              required
            />
          </div>
          <div className='input_div'>
          <label htmlFor="cancelTime">Занятое время и день:</label>
            <input
              type="text"
              id="cancelTime"
              name="cancelTime"
              value={formData.cancelTime}
              onChange={handleChange}
            />

          </div>
          <div className='input_div'>
            <label htmlFor="cancelMessage">Доп информация:</label>
            <textarea
              type="text"
              id="cancelMessage"
              name="cancelMessage"
              value={formData.cancelMessage}
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
            <label for="agreedCancelTerms" className='agreedCancelterms'>Я подтверждаю, что в случае, если отмена была позднее чем за сутки, то я обязусь оплатить ранее зянятое мною время в полном объёме. 
              <br></br>
              В противном случае группа попадает в <span onClick={handleBlackRulesClick}>чёрный список</span> 
            </label>
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

export default ConnectMessage;