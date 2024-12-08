import React from 'react';
import BackBtn from '../utils/BackBtn';

import './footer.scss';

const Footer = ({ setActiveTab }) => {

    // опен вк
    const vkClick = (e) => {
        e.preventDefault();
        window.open("https://vk.com/reptochkawave", "_blank");
    }

    // опен tg
    const telegramClick = (e) => {
        
    }

    // опен звонок
    const handleCall = () => {
        const phoneNumber = '666'
        window.location.href = `tel:${phoneNumber}`;
    };

    return(
        <>
            <div className='footer'>
                <h3>Реп точка Волна</h3>
                <div className='footer_icons'>
                    <i className="fa-brands fa-vk" onClick={vkClick}></i>
                    <i className="fa-brands fa-telegram"></i>
                    <i className="fa-solid fa-phone" onClick={handleCall}></i>
                </div>
                <BackBtn setActiveTab={setActiveTab} />
            </div>
            
        </>
    )
}

export default Footer;