import React from "react"; 
import { Link} from "react-router-dom";
import './studio.css';

const Studio = () => {
    return(
        <>
            <div className="studios"> 
                <Link to='/small_hall' className="studio_block small_hall">
                    <h3 className="pic_text">Зал 1</h3>
                </Link>
                <Link to='/big_hall' className="studio_block big_hall">
                    <h3 className="pic_text">Зал 2</h3>
                </Link>
            </div>
        </>
    )
}

export default Studio