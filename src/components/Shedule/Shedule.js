import React, { useState, useEffect } from "react";
import FetchCSVBig from "../utils/FetchCSVBig";
import FetchCSVSmall from "../utils/FetchCSVSmall";
import BookButton from "../Studio/BookButton/BookButton";
import CancelButton from "../CancelButton/CancelButton";
import FetchPriceSmall from "../utils/FetchPriceSmall";
import FetchPriceBig from "../utils/FetchPriceBig";

import './shedule.scss';

const Shedule = () => {
    const [ isLoading, setIsLoading] = useState(false);
    const [ isLoading2, setIsLoading2 ] = useState(false);
    // const [ isLoading3, setIsLoading3 ] = useState(false);
    const [ showPopupSmall, setShowPopupSmall ] = useState(false); 
    const [ showPopupBig, setShowPopupBig ] = useState(false); 
    const [ disableScroll, setDisableScroll ] = useState(false);
    const [ selectedTimeSmall, setSelectedTimeSmall ] = useState("");
    const [ selectedTimeBig, setSelectedTimeBig ] = useState("");
    const [ selectedHallSmall, setSelectedHallSmall ] = useState("");
    const [ selectedHallBig, setSelectedHallBig ] = useState("");
    const [ cancelPopUp, setCancelPopUp ] = useState(false);
    const [ rulesPopUp, setRulesPopUp ] = useState(false);
    const [ blackListRules, setBlaclListRules ] = useState(false);
 
    const handleClickButtonSmall = () => {
        setShowPopupSmall(!showPopupSmall); // Toggle Small Hall Popup
        setShowPopupBig(false); // Ensure Big Hall Popup is closed
        setDisableScroll(!disableScroll);
        // очистка стейта времени и зала, если там что то уже есть при нажатии на кнопку записи. а не на клетку таблицы
        if(selectedTimeSmall || selectedTimeBig !== "") {
            setSelectedTimeSmall("");
            setSelectedTimeBig("")
        }
        if(selectedHallSmall || selectedHallBig !== "") {
            setSelectedHallSmall("");
            setSelectedHallBig("")
        }
    };

    const handleClickButtonBig = () => {
        setShowPopupBig(!showPopupBig); // Toggle Big Hall Popup
        setShowPopupSmall(false); // Ensure Small Hall Popup is closed
        setDisableScroll(!disableScroll);
        // очистка стейта времени, если там что то уже есть при нажатии на кнопку записи. а не на клетку таблицы
        if(selectedTimeBig !== "") {
            setSelectedTimeBig("");
        }
        if(selectedTimeSmall || selectedTimeBig !== "") {
            setSelectedTimeSmall("");
            setSelectedTimeBig("")
        }
        if(selectedHallSmall || selectedHallBig !== "") {
            setSelectedHallSmall("");
            setSelectedHallBig("")
        }
    };

    const slideToBig = (e) => {
        if (disableScroll) return;
        e.preventDefault();
        window.scrollTo({ top: 600, behavior: 'smooth' });
    }

    const slideToSmall = (e) => {
        if (disableScroll) return;
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleCellClickSmall = (time) => {
        setSelectedTimeSmall(time); // Update selected time
        setSelectedHallSmall('1') // авто зал 1 
        setShowPopupSmall(true); // Open popup for booking
      };

    const handleCellClickBig = (time) => {
        setSelectedTimeBig(time);
        setSelectedHallBig('2'); // авто зал 2
        setShowPopupBig(true);
    };

    // Add/remove body no-scroll class when a popup is open
    useEffect(() => {
        if (showPopupSmall || showPopupBig) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [showPopupSmall, showPopupBig]);

    const handleClosePopup = () => {
        setDisableScroll(false);
    }

    const handleCancelPopUp = () => {
        setCancelPopUp(!cancelPopUp)
        setDisableScroll(!disableScroll);
    }

    const handleRulesClick = () => {
        setRulesPopUp(!rulesPopUp);
        // setDisableScroll(!disableScroll);
    }

    const handleBlackRulesClick = () => {
        setBlaclListRules(!blackListRules);
      }

    return(
        <>
            {(showPopupSmall || showPopupBig || cancelPopUp ) && <div className="overlay"></div>}
            <div className={isLoading? 'hall_block small_hall_container' : "hall_block active"} >
                <div className="blurBackName">
                    <h3>Расписание Малого зала (№1)</h3>
                    <div className="small_price">
                        <p>стоимость 2х часовой репетиции -{'\u00A0'}</p>
                        <FetchPriceSmall isLoading2={isLoading2} setIsLoading2={setIsLoading2}/>
                    </div>
                </div>
                <FetchCSVSmall isLoading2={isLoading2} setIsLoading2={setIsLoading2} onCellClickSmall={handleCellClickSmall} slideToSmall={slideToSmall}/>
                <div className={!showPopupSmall? null : 'contact_container'}>
                    {isLoading? (
                        null
                    ) : (
                        <BookButton 
                            slideToSmall={slideToSmall}
                            handleClickButton={handleClickButtonSmall}
                            showPopup={showPopupSmall}
                            selectedTimeSmall={selectedTimeSmall}
                            selectedHallSmall={selectedHallSmall}
                            handleClosePopup={handleClosePopup}
                            handleRulesClick={handleRulesClick}
                            rulesPopUp={rulesPopUp}
                        />
                    )}
               </div>
            </div>
            <div className={isLoading?  'hall_block big_hall_container' : "hall_block active"}>
                <div className="blurBackName">
                    <h3 onClick={slideToBig}>Расписание Большого зала (№2)</h3>
                    <div className="small_price">
                        <p>стоимость 2х часовой репетиции -{'\u00A0'}</p>
                        <FetchPriceBig isLoading={isLoading} setIsLoading={setIsLoading}/>
                    </div>
                </div>
                <FetchCSVBig isLoading={isLoading} setIsLoading={setIsLoading} onCellClickBig={handleCellClickBig}/>
                <div className={!showPopupBig? null : 'contact_container' }>
                    {isLoading2? (
                        null
                    ) : (
                        <BookButton 
                            handleClickButton={handleClickButtonBig}
                            showPopup={showPopupBig}
                            selectedTimeBig={selectedTimeBig}
                            selectedHallBig={selectedHallBig}
                            handleClosePopup={handleClosePopup}
                            handleRulesClick={handleRulesClick}
                            rulesPopUp={rulesPopUp}
                        />
                    )}
               </div>
            </div>
            <div className={isLoading?  'hall_block big_hall_container' : "hall_block active"}>
                <div className={!cancelPopUp? null : 'contact_container cancel_cont black_list_rules_container' }>
                    {isLoading && isLoading2? (
                        null
                    ) : (
                        <CancelButton
                            handleCancelPopUp={handleCancelPopUp}
                            cancelPopUp={cancelPopUp}
                            handleClosePopup={handleClosePopup}
                            handleClickButton={handleCancelPopUp}
                            handleBlackRulesClick={handleBlackRulesClick}
                            blackListRules={blackListRules}
                        />
                    )}
               </div>
            </div>
        </>
    )
}

export default Shedule;