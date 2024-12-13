import React from "react";
import ConnectMessage from "./ConnectMessage";
import './connectMessage.scss';

const ConnectMessageButton = ({ handleLetterClick }) => {
    return(
        <>
        
            <div className="contact_container message_container">
                <div className="outer" onClick={handleLetterClick}>
                    <div className="inner">
                        <label className='label_class' >назад</label>
                    </div>
                </div>
                <ConnectMessage />

            </div>
        </>
    )
}

export default ConnectMessageButton;