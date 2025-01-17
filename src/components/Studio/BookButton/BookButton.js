import React from "react";
// import Contact from "../../Contact/Contact";
import Contact from "./Contact/Contact";
import Rules from "../Rules/Rules";

import './bookButton.scss';

const BookButton = ({handleClickButton, showPopup, selectedTimeSmall, selectedTimeBig, slideToSmall, selectedHallSmall, selectedHallBig, handleClosePopup, handleRulesClick, rulesPopUp, mobileSlideUp}) => {

    const handleSlideAndClick = (e) => {
      if (slideToSmall) {
        slideToSmall(e); // `e` для обработки события
      }
        if (handleClickButton) {
          handleClickButton();
      }
      if (mobileSlideUp) {
        mobileSlideUp();
      }
    }
    
    return(
        <>
            <div className="flex_center">
                { !showPopup? (
                  <button className='button-30' onClick={handleSlideAndClick}>Записаться на репетицию</button>
                ) : (
                  <>
                    {!rulesPopUp? (
                        <div className="outer" onClick={handleClosePopup}>
                          <div className="inner" onClick={handleClickButton}>
                            <label className='label_class'>назад</label>
                          </div>
                        </div>
                    ) : (null)}
                    {!rulesPopUp? (
                      <Contact handleClickButton={handleClickButton} selectedTimeSmall={selectedTimeSmall} selectedTimeBig={selectedTimeBig} selectedHallSmall={selectedHallSmall} selectedHallBig={selectedHallBig} handleRulesClick={handleRulesClick}/>
                    ) : (
                      <Rules handleRulesClick={handleRulesClick} />
                    )} 
                  </>
                  
                )}
                
            </div>
        </>
    )
}

export default BookButton;