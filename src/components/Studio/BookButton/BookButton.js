import React from "react";
// import Contact from "../../Contact/Contact";
import Contact from "./Contact/Contact";
import Rules from "../Rules/Rules";

import './bookButton.css';

const BookButton = ({handleClickButton, showPopup, selectedTimeSmall, selectedTimeBig, slideToSmall, selectedHallSmall, selectedHallBig, handleClosePopup, handleRulesClick, rulesPopUp}) => {

    const handleSlideAndClickSmall = (e) => {
      if (slideToSmall) {
        slideToSmall(e); // `e` для обработки события
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
                    <div className="outer" onClick={handleClosePopup}>
                      <div className="inner" onClick={handleClickButton}>
                        <label className='label_class'>назад</label>
                      </div>
                    </div>
                    
                    {/* <Contact handleClickButton={handleClickButton} selectedTimeSmall={selectedTimeSmall} selectedTimeBig={selectedTimeBig} selectedHallSmall={selectedHallSmall} selectedHallBig={selectedHallBig} handleRulesClick={handleRulesClick}/> */}
                    {!rulesPopUp? (
                      <Contact handleClickButton={handleClickButton} selectedTimeSmall={selectedTimeSmall} selectedTimeBig={selectedTimeBig} selectedHallSmall={selectedHallSmall} selectedHallBig={selectedHallBig} handleRulesClick={handleRulesClick}/>
                    ) : (
                      <Rules handleRulesClick={handleRulesClick}/>
                    )} 
                  </>
                  
                )}
                
            </div>
        </>
    )
}

export default BookButton;