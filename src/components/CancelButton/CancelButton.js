import React from "react";
import Cancel from "./Cancel";


const CancelButton = ({ cancelPopUp, handleCancelPopUp, handleClosePopup, handleClickButton }) => {
    return(
        <>
        
            <div className="cancel_container">
                    {!cancelPopUp? (
                        <div className="cancel_btn_div">
                            <button class="comic-button" onClick={handleCancelPopUp}>
                                <span>Отменить</span>
                                <span>запись</span>
                            </button>
                        </div>
                        ) : (
                        <>
                            <div className="outer" onClick={handleClosePopup}>
                                <div className="inner">
                                    <label className='label_class' onClick={handleClickButton}>назад</label>
                                </div>
                            </div>
                            <Cancel handleClickButton={handleClickButton} />
                        </>
                    ) }
            </div>
        </>
    )
}

export default CancelButton;