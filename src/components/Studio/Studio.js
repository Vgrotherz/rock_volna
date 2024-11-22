import React from "react"; 
import { Link} from "react-router-dom";
import BigGallery from "./Gallery/BigGallery";

import './studio.scss';

const Studio = () => {
    return(
        <div className="small_hall">  
            {/* <Gallery /> */}
            {/* <div className="studios"> 
                <div className="studio_block small_hall">
                    {photoGallSmall.map((photo) => (
                        <img src={photo.url} alt={photo.title} />
                    ))}
                    <Gallery />
                    <Link to='/small_hall' className="pic_text">Зал 1</Link>
                </div>
                <Link to='/big_hall' className="studio_block big_hall">
                    {photoGallBig.map((photo) => (
                        <img src={photo.url} alt={photo.title}/>
                    ))}
                    <h3 className="pic_text">Зал 2</h3>
                </Link>
            </div> */}
            <BigGallery />
            <Link to='/small_hall' className="pic_text">Зал 1</Link>
        </div>
    )
}

export default Studio