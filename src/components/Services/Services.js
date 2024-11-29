import React from "react";
import alexOnBike from '../../media/AlexUslugi.jpg';

import './services.scss';

const Services = () => {
    return(
        <>
            <div className="services_block"> 
                <h2>Это Александр на все руки мастер, звукареж и ваще</h2>
                <div className="services_images">
                    <img src={alexOnBike} alt="Alex on bike"></img>
                </div>
                <p>может всякое</p>
                <p>Перечень всякого: </p>
                <ul>
                    <li>и то</li>
                    <li>и это</li>
                    <li>и даже это</li>
                    <li>а это ваще ток он сделает</li>
                </ul>
                {/* <img src={alexOnBike} alt="Alex On Bike"> </img> */}
            </div>
        </>
    )
}

export default Services;