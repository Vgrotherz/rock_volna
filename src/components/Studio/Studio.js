import React from "react"; 
import { Link} from "react-router-dom";
import { BigGallery } from "./Gallery/BigGallery";
import { SmallGallery } from "./Gallery/BigGallery";

import './studio.scss';

const Studio = () => {
    return(
        <>
            <div className="big_hall">  
                <BigGallery />
                <Link to='/big_hall' className="pic_text">Зал 1</Link>
            </div>
            <Link to='/big_hall' className="studio_btn">
                <button>расписание</button>
            </Link>
            <div className="small_hall">
                <SmallGallery />
                <Link to='/small_hall' className="pic_text">Зал 2</Link>
            </div>
            <Link to='/small_hall' className="studio_btn">
                <button>расписание</button>
            </Link>
        </>
    )
}

export default Studio