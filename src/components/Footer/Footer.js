import React from 'react';
import BackBtn from '../utils/BackBtn';

import './footer.scss';

const Footer = ({ setActiveTab }) => {
    return(
        <>
            <div className='footer'>
                <h3>Реп точка Волна</h3>
                <BackBtn setActiveTab={setActiveTab}/>
            </div>
            
        </>
    )
}

export default Footer;