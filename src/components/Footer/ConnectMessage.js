import React, { useState } from 'react';

import ContactLoader from '../utils/ContactLoader';

function ConnectMessage({ handleClickButton, handleLetterClick }) {
  const [formData, setFormData] = useState({
    connectName: '',
    connectPhone: '',
    connectMessage: ''
  });
  const [ loader, setLoader ] = useState(false);
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConnectSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  
    const data = new FormData();
    data.append('connectName', formData.connectName);
    data.append('connectPhone', formData.connectPhone);
    data.append('connectMessage', formData.connectMessage);
    data.append('source', 'component2'); // Здесь добавляем параметр source, например для компонента 2
    
    const Sheet_Url = "https://script.google.com/macros/s/AKfycbwV7HKymGXP1kT3KfyHuAIwk1wfx2U1Ovk3m46bxV917lCfJ_v7KgeZ4nTMRKOq-d-D/exec";
 
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
            connectName: '',
            connectPhone: '',
            connectMessage: '',
          });
          alert('ваше сообщение принято, ожидайте обратной связи от администратора')
          handleLetterClick();
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
        <form onSubmit={handleConnectSubmit} className='contact_form'>
          <div className='input_div'>
            <label htmlFor="cancelBandName">Ваше имя:</label>
            <input
              type="text"
              id="connectName"
              name="connectName"
              value={formData.connectName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input_div'>
            <label htmlFor="connectPhone">Телефон для связи:</label>
            <input
              type="number"
              id="connectPhone"
              name="connectPhone"
              value={formData.connectPhone}
              onChange={handleChange}
              maxlength="11" size="11"
              required
            />
          </div>
          <div className='input_div'>
            <label htmlFor="connectMessage">Ваше сообщение:</label>
            <textarea
              type="text"
              id="connectMessage"
              name="connectMessage"
              value={formData.connectMessage}
              onChange={handleChange}
            />
          </div>
          {/* <div className='terms_check cancel_check'>
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
          </div> */}
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