import React from 'react';
import BackBtn from '../utils/BackBtn';
import ConnectMessageButton from './ConnectMessageButton';

import './footer.scss';

const Footer = ({ setActiveTab, connectMessage , setConnectMessage }) => {
    // const [ connectMessage , setConnectMessage ] = useState(false);

    // опен вк
    const vkClick = (e) => {
        e.preventDefault();
        window.open("https://vk.com/reptochkawave", "_blank");
    }

    // опен tg
    const handleTelegramClick = (e) => {
        e.preventDefault();
        window.open("https://t.me/VolnaRepTochka", "_blank");
    }

    // опен звонок
    const handleCall = () => {
        const phoneNumber = '+79082216377'
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleLetterClick = () => {
        setConnectMessage(!connectMessage)
    }

    return(
        <>  
            {connectMessage && <div className="overlay"></div>}
            <div className='footer'>
                {!connectMessage? (null) : (
                    <ConnectMessageButton />
                )}
                <h3>Реп точка Волна</h3>
                <div className='footer_icons'>
                    <i className="fa-brands fa-vk" onClick={vkClick}></i>
                    <i className="fa-brands fa-telegram" onClick={handleTelegramClick}></i>
                    <i className="fa-solid fa-phone" onClick={handleCall}></i>
                    <i className="fa-solid fa-envelope" onClick={handleLetterClick}></i>
                </div>
                <BackBtn setActiveTab={setActiveTab} />
            </div>
            
        </>
    )
}

export default Footer;