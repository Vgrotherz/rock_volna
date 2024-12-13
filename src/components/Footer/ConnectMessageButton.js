import React from "react";
import ConnectMessage from "./ConnectMessage";
import './connectMessage.scss';

const ConnectMessageButton = ({ handleLetterClick }) => {
    return(
        <>
        
            <div className="message_container contact_container ">
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