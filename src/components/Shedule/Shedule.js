import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

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
    const [ currentDate, setCurrentDate ] = useState("");
    

    const location = useLocation();
    const navigate = useNavigate();
 
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
        if(window.innerWidth <= 1023){
            window.scrollTo({ top: 600, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        
    }

    const slideToBigLink = () => {
        // if(window.innerWidth <= 1024){
            window.scrollTo({ top: 600, behavior: "auto" });
        // }
        
      };

    const slideToSmallLink = () => {
        if(window.innerWidth <= 1024){
            window.scrollTo({ top: 0, behavior: "auto" });
        }
        
    }

    const slideToSmall = (e) => {
        if (disableScroll) return;
        e.preventDefault();
        // if(window.innerWidth <= 1024){
            window.scrollTo({ top: 0, behavior: 'smooth' });
        // }
        
    }

    const mobileSlideUp = () => {
        if (disableScroll) return;
        // e.preventDefault();
        if(window.innerWidth <= 1023) {
            window.scrollTo({ top: 600, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
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
        if (location.state?.scrollToBig) {
            // выполнится только после полной отрисовки
            slideToBigLink();
            navigate(location.pathname, { replace: true });
        }
        if (location.state?.scrollToSmall) {
            slideToSmallLink();

            // Очистка состояния, чтобы избежать повторного выполнения
            navigate(location.pathname, { replace: true });
        }
        const today = new Date();
        // Массив с днями недели в нужном формате
        const daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

        // Получаем текущий день недели
        const dayOfWeek = daysOfWeek[today.getDay()];
        const formattedDate = `${dayOfWeek}, ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
        setCurrentDate(formattedDate);

        //при выскакивающем попапе скролл блокируется
        if (showPopupSmall || showPopupBig || cancelPopUp) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [showPopupSmall, showPopupBig, cancelPopUp, location.state, navigate ]);

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


    const bookButtonStyleSmall = !showPopupSmall? null : (!rulesPopUp ? 'contact_container' : 'contact_container contact_container_rules');
    
    const bookButtonStyleBig = !showPopupBig? null : (!rulesPopUp ? 'contact_container' : 'contact_container contact_container_rules');

    return(
        <>
            <div className="shedule_container">
                {(showPopupSmall || showPopupBig || cancelPopUp ) && <div className="overlay"></div>}
                <div className={isLoading? 'hall_block small_hall_container' : "hall_block active"} >
                    <div className="table_header">
                        <div className="blurBackName">
                            <h3>Расписание Правого Зала</h3>
                            <div className="small_price">
                                <p>стоимость 2х часовой репетиции -{'\u00A0'}</p>     
                                <FetchPriceSmall isLoading2={isLoading2} setIsLoading2={setIsLoading2}/>
                            </div>
                        </div>
                        <div className="time_date">
                            <p>Актуальное расписание на
                                {currentDate? (<> {currentDate} </>) : (null) }</p>
                        </div>
                    </div>
                    <FetchCSVSmall isLoading2={isLoading2} setIsLoading2={setIsLoading2} onCellClickSmall={handleCellClickSmall} slideToSmall={slideToSmall}/>
                    {showPopupSmall? (
                            <button className='button-30' >Записаться на репетицию</button>
                            ) : (null)}
                    <div className={bookButtonStyleSmall}>
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
                </div>
                </div>
                <div className={isLoading?  'hall_block big_hall_container' : "hall_block active"}>
                    <div className="table_header">
                        <div className="blurBackName" onClick={slideToBig}>
                            <h3 >Расписание Студии</h3>
                            <div className="small_price">
                                <p>стоимость 2х часовой репетиции -{'\u00A0'}</p>
                                <FetchPriceBig isLoading={isLoading} setIsLoading={setIsLoading}/>
                            </div>
                        </div>
                        <div className="time_date">
                            <p>Актуальное расписание на {currentDate}</p>
                        </div>
                    </div>
                    <FetchCSVBig isLoading={isLoading} setIsLoading={setIsLoading} onCellClickBig={handleCellClickBig} 
                    slideToBig={slideToBig}
                    />
                    {showPopupBig? (
                            <button className='button-30' >Записаться на репетицию</button>
                            ) : (null)}
                    <div className={bookButtonStyleBig}>
                            <BookButton 
                                mobileSlideUp={mobileSlideUp}
                                handleClickButton={handleClickButtonBig}
                                showPopup={showPopupBig}
                                selectedTimeBig={selectedTimeBig}
                                selectedHallBig={selectedHallBig}
                                handleClosePopup={handleClosePopup}
                                handleRulesClick={handleRulesClick}
                                rulesPopUp={rulesPopUp}
                            />
                </div>
                </div>
                
            </div>
            {/* вынос для десктоп версии */}
            <div className={isLoading?  'hall_block big_hall_container' : "hall_block active"}>
                        {cancelPopUp? (
                            <div className="cancel_btn_div">
                                <button class="comic-button" onClick={handleCancelPopUp}>
                                    <span>Отменить</span>
                                    <span>запись</span>
                                </button>
                            </div>
                            ) : (null) }
                    <div className={!cancelPopUp? null : 'contact_container cancel_cont black_list_rules_container' }>
                        {isLoading && isLoading2? (
                            null
                        ) : (
                            <CancelButton
                                mobileSlideUp={mobileSlideUp}
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