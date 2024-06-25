import React from "react";
import Contact from "../../Contact/Contact";

import './bookButton.css';

const BookButton = ({handleClickButton, showPopup}) => {
    
    return(
        <>
            <div >
                { !showPopup? (
                  <button className='button-30' onClick={handleClickButton}>Записаться на репетицию</button>
                ) : (
                  <>
                    <div class="outer">
                      <div class="inner">
                        <label class='label_class' onClick={handleClickButton}>назад</label>
                      </div>
                    </div>
                    <Contact handleClickButton={handleClickButton} />
                  </>
                  
                )}
                
            </div>
        </>
    )
}

export default BookButton;