import React from "react";
import Contact from "../../Contact/Contact";

import './bookButton.css';

const BookButton = ({handleClickButton, showPopup, selectedTimeSmall, selectedTimeBig}) => {
    
    return(
        <>
            <div className="flex_center">
                { !showPopup? (
                  <button className='button-30' onClick={handleClickButton}>Записаться на репетицию</button>
                ) : (
                  <>
                    <div className="outer">
                      <div className="inner">
                        <label className='label_class' onClick={handleClickButton}>назад</label>
                      </div>
                    </div>
                    <Contact handleClickButton={handleClickButton} selectedTimeSmall={selectedTimeSmall} selectedTimeBig={selectedTimeBig}/>
                  </>
                  
                )}
                
            </div>
        </>
    )
}

export default BookButton;