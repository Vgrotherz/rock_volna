import React from "react";

import './about.scss';
import { Link } from "react-router-dom";

const About = () => {

    return (
        <>
            <div className='about_container'>
                <div className="text_about">
                    <h2>Как к нам добраться:</h2>
                    <h4>Проспект им. газеты красноярский рабочий 87</h4>
                    <p>Вход со стороны двора. 
                        <br></br>
                    Подробнее см. на карте ниже</p>
                </div>
                
                <div className="yandex_map">
                    <Link className="first_link" src="https://yandex.ru/maps/org/volna/1796947613/?utm_medium=mapframe&utm_source=maps" >
                        </Link>
                    <Link className="second_link" src="https://yandex.ru/maps/62/krasnoyarsk/category/club_for_children_and_teenagers/184107202/?utm_medium=mapframe&utm_source=maps" >
                        </Link>
                    <iframe title="ifr" src="https://yandex.ru/map-widget/v1/?ll=92.936947%2C56.003321&mode=poi&poi%5Bpoint%5D=92.937081%2C56.003461&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1796947613&z=18.86" frameBorder="1" 
                    allowFullScreen='true' >
                    </iframe>
                </div>
            </div>
        </>
    );
};


export default About;