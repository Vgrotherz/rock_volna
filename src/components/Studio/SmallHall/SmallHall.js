import React from "react";
import FetchCSV from "../../utils/FetchCSV";

import './smallHall.css';

const SmallHall = () => {
    return(
        <> 
            <div className="small_hall_block">
                <h1>Расписание Малого зала (№1)</h1>
                {/* <p className="stuff_list">описание аппарата</p> */}
                {/* <div className="iframe_container">
                    <iframe className="iframe_size" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQlHKG9Txbs1wOZzrfweQOMp9ZVV7b1hMiDzc1VfILcvSOaeRDpmSUNQf3_bfwEuuHuP-cq16tpdH82/pubhtml?widget=true&amp;headers=false"></iframe>
                </div> */}
               <FetchCSV />
            </div>       
        </>
    )
}

export default SmallHall;