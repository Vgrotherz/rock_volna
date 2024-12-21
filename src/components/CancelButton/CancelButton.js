import React from "react";
import Cancel from "./Cancel";
import BlackRules from "./BlackRules";

import './cancelButton.scss';


const CancelButton = ({ cancelPopUp, handleCancelPopUp, handleClosePopup, handleClickButton, handleBlackRulesClick, blackListRules, mobileSlideUp }) => {

    const handleSlideAndClick = (e) => {
        if (handleCancelPopUp) {
            handleCancelPopUp();
        }
        if (mobileSlideUp) {
            mobileSlideUp();
        }
    }

    return(
        <>
        
            <div className="cancel_container">
                    {!cancelPopUp? (
                        <div className="cancel_btn_div">
                            <button class="comic-button" onClick={handleSlideAndClick}>
                                <span>Отменить</span>
                                <span>запись</span>
                            </button>
                        </div>
                        ) : (
                        <> {!blackListRules? (
                            <div className="outer" onClick={handleClosePopup}>
                                <div className="inner">
                                    <label className='label_class' onClick={handleClickButton}>назад</label>
                                </div>
                            </div>
                        ) : (null)}
                            {!blackListRules? (
                                 <Cancel handleClickButton={handleClickButton} handleBlackRulesClick={handleBlackRulesClick} />
                            ) : (
                                <BlackRules handleBlackRulesClick={handleBlackRulesClick} />
                            )}
                           
                        </>
                    )}
            </div>
        </>
    )
}

export default CancelButton;