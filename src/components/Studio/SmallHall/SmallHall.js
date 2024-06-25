import React, { useState } from "react";
import { Link } from "react-router-dom";
import FetchCSVSmall from "../../utils/FetchCSVSmall";
import BookButton from "../BookButton/BookButton";

import './smallHall.css';

const SmallHall = () => {
    const [ isLoading, setIsLoading] = useState(false);
    const [ showPopup, setShowPopup ] = useState(false);
 
    const handleClickButton = () => {
      setShowPopup(!showPopup);
    }

    return(
        <> 
            <div className="hall_block">
                <Link to='/big_hall'>
                    <h3>Посмотреть расписание Большого зала (№2)</h3>
                </Link>
                <h1>Расписание Малого зала (№1)</h1>
               <FetchCSVSmall isLoading={isLoading} setIsLoading={setIsLoading}/>
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

export default SmallHall;