import React from "react";
import { Link } from "react-router-dom";
import FetchCSVSmall from "../../utils/FetchCSVSmall";

import './smallHall.css';

const SmallHall = () => {
    return(
        <> 
            <div className="hall_block">
                <Link to='/big_hall'>
                    <h3>Расписание Большого зала (№2)</h3>
                </Link>
                <h1>Расписание Малого зала (№1)</h1>
               <FetchCSVSmall />
            </div>       
        </>
    )
}

export default SmallHall;