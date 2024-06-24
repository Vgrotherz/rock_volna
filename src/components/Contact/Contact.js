import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    bandName: '',
    email: '',
    phoneNumber: '',
    hall: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  
    const data = new FormData();
    data.append('bandName', formData.bandName);
    data.append('email', formData.email);
    data.append('phoneNumber', formData.phoneNumber);
    data.append('hall', formData.hall);
    data.append('message', formData.message);
  
    const Sheet_Url = "https://script.google.com/macros/s/AKfycbzQzEo1sUIuFJxaf1sHMTEYPqwNUWIUi_2Ka_np4GNYTo5a8XjouA3YNI-1E9WURAfb/exec";
    
    try {
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
            message: '',
          });
      } else {
        console.error('Error:', result.error);
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div >
      <header>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">Название группы:</label>
            <input
              type="text"
              id="bandName"
              name="bandName"
              value={formData.bandName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">ссылка на профиль вк/тг:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
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
          <div>
            <legend>Номер зала</legend>
            <label htmlFor="hall">1</label>
            <input
              type="radio"
              id="hall"
              name="hall"
              value={formData.hall}
              onChange={handleChange}
            />
            <label htmlFor="hall">2</label>
            <input
              type="radio"
              id="hall"
              name="hall"
              value={formData.hall}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Доп информация:</label>
            <input
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default Contact;