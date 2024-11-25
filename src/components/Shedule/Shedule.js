import React, { useState } from "react";
import FetchCSVBig from "../utils/FetchCSVBig";
import FetchCSVSmall from "../utils/FetchCSVSmall";

import './shedule.scss';



const Shedule = () => {
    const [ isLoading, setIsLoading] = useState(false);
    const [ isLoading2, setIsLoading2 ] = useState(false);
    const [ showPopup, setShowPopup ] = useState(false);
 
    const handleClickButton = () => {
      setShowPopup(!showPopup);
    }


    return(
        <>
            <div className="hall_block">
                <h1>Расписание Большого зала (№2)</h1>
                <FetchCSVBig isLoading={isLoading} setIsLoading={setIsLoading} />
            </div>
            <div className="hall_block">
                <h1>Расписание Малого зала (№1)</h1>
               <FetchCSVSmall isLoading2={isLoading2} setIsLoading2={setIsLoading2}/>
            </div>
        </>
    )
}

export default Shedule;