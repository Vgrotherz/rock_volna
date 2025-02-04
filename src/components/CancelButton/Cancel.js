import React, { useState } from 'react';

import ContactLoader from '../utils/ContactLoader';

function Cancel({ handleClickButton, handleBlackRulesClick }) {
  const [formData, setFormData] = useState({
    cancelBandName: '',
    cancelPhoneNumber: '',
    cancelTime: '',
    cancelMessage: ''
  });
  const [ loader, setLoader ] = useState(false);
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancelSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  
    const data = new FormData();
    data.append('cancelBandName', formData.cancelBandName);
    data.append('cancelPhoneNumber', formData.cancelPhoneNumber);
    data.append('cancelTime', formData.cancelTime);
    data.append('cancelMessage', formData.cancelMessage);
    data.append('source', 'component3'); // Здесь добавляем параметр source, например для компонента 3
    
    const Sheet_Url = "https://script.google.com/macros/s/AKfycbxyzFI5X2bC7bkE4ivfR_WomhqwRZkqNfvD-EEEIpV4INSsvc9jC9jIFRM4OII85K4f/exec";

    // новый на tochkavolna@gmail.com
    // https://script.google.com/macros/s/AKfycbxyzFI5X2bC7bkE4ivfR_WomhqwRZkqNfvD-EEEIpV4INSsvc9jC9jIFRM4OII85K4f/exec

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

export default Cancel;