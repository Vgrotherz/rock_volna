import React from "react";
import { Link } from "react-router-dom";
import './bigHall.css'
import FetchCSVBig from "../../utils/FetchCSVBig";

const BigHall = () => {
    return(
        <>
            <div className="small_hall_block">
                <Link to='/small_hall'>
                    <h3>Расписание Малого зала (№1)</h3>
                </Link>
                <h1>Расписание Большого зала (№2)</h1>
               <FetchCSVBig />
            </div>  
        </>
    )
}

export default BigHall;