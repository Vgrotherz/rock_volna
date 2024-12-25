import React from "react"; 
import { Link } from "react-router-dom";

import { BigGallery } from "./Gallery/Gallery";
import { SmallGallery } from "./Gallery/Gallery";
import SheduleBtn from "../utils/SheduleBtn";

import './studio.scss';

const Studio = () => {

    return(
        <div className="studios_block">
            <div className="small_hall">
                <SmallGallery />
                <Link 
                    to="/shedule" 
                    state={{ scrollToSmall: true }} 
                    className="pic_text"
                    >
                    Правый зал</Link>
                <div state={{ scrollToSmall: true }}  className="studio_btn">
                    <SheduleBtn scrollTarget="small" />
                </div>
            </div>
            
            <div className="big_hall">  
                <BigGallery />
                <Link 
                    to="/shedule" 
                    state={{ scrollToBig: true }} 
                    className="pic_text"
                    >
                    Студия
                </Link>
                <div to='/big_hall' className="studio_btn">
                    <SheduleBtn scrollTarget="big" />
                </div>
            </div>
            
            
        </div>
    )
}

export default Studio