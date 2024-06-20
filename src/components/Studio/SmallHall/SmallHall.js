import React from "react";
import FetchGoogleSheet from "../../utils/fetchGoogleSheet";

const SmallHall = () => {
    return(
        <> 
            <div>
                <p className="stuff_list">описание аппарата</p>
                <div>
                    <FetchGoogleSheet />
                </div>
            </div>       
        </>
    )
}

export default SmallHall;