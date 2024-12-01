import React from "react";
import Contact from "../../Contact/Contact";

import './bookButton.css';

const BookButton = ({handleClickButton, showPopup, selectedTimeSmall, selectedTimeBig, selectedHallSmall, slideToSmall}) => {

    const handleSlideAndClickSmall = (e) => {
      if (slideToSmall) {
        slideToSmall(e); // Передаем `e` для обработки события
      }
        if (handleClickButton) {
          handleClickButton();
      }
    }
    
    return(
        <>
            <div className="flex_center">
                { !showPopup? (
                  <button className='button-30' onClick={handleSlideAndClickSmall}>Записаться на репетицию</button>
                ) : (
                  <>
                    <div className="outer">
                      <div className="inner">
                        <label className='label_class' onClick={handleClickButton}>назад</label>
                      </div>
                    </div>
                    <Contact handleClickButton={handleClickButton} selectedTimeSmall={selectedTimeSmall} selectedTimeBig={selectedTimeBig} selectedHallSmall={selectedHallSmall}/>
                  </>
                  
                )}
                
            </div>
        </>
    )
}

export default BookButton;