import React from "react"; 
import { Link} from "react-router-dom";
import { BigGallery } from "./Gallery/Gallery";
import { SmallGallery } from "./Gallery/Gallery";
import SheduleBtn from "../utils/SheduleBtn";

import './studio.scss';

const Studio = () => {
    return(
        <>
            <div className="big_hall">  
                <BigGallery />
                <Link to='/big_hall' className="pic_text">Зал 1</Link>
            </div>
            <Link to='/big_hall' className="studio_btn">
                <SheduleBtn />
            </Link>
            <div className="small_hall">
                <SmallGallery />
                <Link to='/small_hall' className="pic_text">Зал 2</Link>
            </div>
            <Link to='/small_hall' className="studio_btn">
                <SheduleBtn />
            </Link>
        </>
    )
}

export default Studio