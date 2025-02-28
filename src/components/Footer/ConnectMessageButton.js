import React from "react";
// import { useLocation } from 'react-router-dom';

import ConnectMessage from "./ConnectMessage";
import './connectMessage.scss';

const ConnectMessageButton = ({ handleLetterClick }) => {
    // const location = useLocation();

    // const getButtonClass = () => {
    //     switch (location.pathname) {
    //         case "/shedule":
    //             return "message_container contact_container schedule_style";
    //         case "/about":
    //             return "message_container contact_container about_style";
    //         case "/media":
    //             return "message_container contact_container media_style";
    //         case "/services":
    //             return "message_container contact_container services_style";
    //         default:
    //             return "message_container contact_container default_style"; // Стиль по умолчанию
    //     }
    // };

    return(
        <>
        
            <div className="message_container contact_container default_style">
                <div className="outer" onClick={handleLetterClick}>
                    <div className="inner">
                        <label className='label_class' >назад</label>
                    </div>
                </div>
                <ConnectMessage handleLetterClick={handleLetterClick} />

            </div>
        </>
    )
}

export default ConnectMessageButton;