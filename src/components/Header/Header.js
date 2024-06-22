import React from "react";
import { Link } from "react-router-dom";

import './header.css'


const Header = () => {
    return(
        <>
            <div className="navigation">
                <Link to='/studio'>
                    <p>Расписание</p>
                </Link>
                <Link>
                    <p>вкладка 2</p>
                </Link>
                <Link>
                    <p>вкладка 3</p>
                </Link>
                <Link>
                    <p>вкладка 4</p>
                </Link>
            </div>
        </>
    )
}

export default Header;