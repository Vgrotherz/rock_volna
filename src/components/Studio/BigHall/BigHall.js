import React, {useState} from "react";
import { Link } from "react-router-dom";
import './bigHall.css'
import FetchCSVBig from "../../utils/FetchCSVBig";
import BookButton from "../BookButton/BookButton.js";

const BigHall = () => {
    const [ isLoading, setIsLoading] = useState(false);
    const [ showPopup, setShowPopup ] = useState(false);
 
    const handleClickButton = () => {
      setShowPopup(!showPopup);
    }
    
    return(
        <>
            <div className="hall_block">
                <Link to='/small_hall'>
                    <h3>посмотреть расписание Малого зала (№1)</h3>
                </Link>
                <h1>Расписание Большого зала (№2)</h1>
               <FetchCSVBig isLoading={isLoading} setIsLoading={setIsLoading} />
               <div className={!showPopup? null : 'contact_container' }>
                    {isLoading? (
                        null
                    ) : (
                        <BookButton 
                            handleClickButton={handleClickButton}
                            showPopup={showPopup}
                        />
                    )}
               </div>
            </div>  
        </>
    )
}

export default BigHall;