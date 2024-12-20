import React from "react";

import soundEngineer from '../../media/uslugi/hands.jpg';
import mixer from '../../media/uslugi/x32rack.jpg';
import stageBox from '../../media/uslugi/s16.jpg';
import pearl from '../../media/uslugi/pearl.jpg';
import fender from '../../media/uslugi/fender.jpg';
import ampeg from '../../media/uslugi/ampeg.jpg';


import './services.scss';

const Services = () => {

    const handleCall = () => {
        const phoneNumber = '+79082216377'
        window.location.href = `tel:${phoneNumber}`;
    };


    return(
        <>
            <div className="services_block"> 
                
                <div className="pricing-table">
                    <div className="pricing-option sound_engineer">
                        <i className="material-icons">equalizer</i>
                        <h1>Звукорежиссер на ваши мероприятия.</h1>
                        <img src={soundEngineer} alt="sound engineer" />
                        <hr />
                        <p>Подробное описание услуги</p>
                        <hr />
                        <div className="price">
                            <div className="front">
                                <span className="price">500 <b>р/час</b></span>
                            </div>
                            <div className="back">
                                <p className="button" onClick={handleCall} >Заказать</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pricing-option">
                        <i className="material-icons">perm_identity</i>
                        <h1>Микшерный пульт BEHRINGER X32 RACK.</h1>
                        <img src={mixer} alt="behringer x32" />
                        <hr />
                        <p>Идет в Комплекте с планшетом и роутером. И остальное описание</p>
                        <hr />
                        <div className="price">
                            <div className="front">
                                <span className="price">5000<b>руб.</b></span>
                            </div>
                            <div className="back">
                                <p className="button" onClick={handleCall} >Заказать</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-option">
                        <i className="material-icons">art_track</i>
                        <h1>Стейдж бокс Behringer S16</h1>
                        <img src={stageBox} alt="behringer s16" />
                        <hr />
                        <p>описание.</p>
                        <hr />
                        <div className="price">
                            <div className="front">
                                <span className="price">3000<b>руб.</b></span>
                            </div>
                            <div className="back">
                                <p className="button" onClick={handleCall}>Заказать</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-option">
                        <i className="material-icons">art_track</i>
                        <h1>Барабанная установка PEARL REFERENCE.</h1>
                        <img src={pearl} alt="PEARL REFERENCE" />
                        <hr />
                        <p>Барабанная установка премиум класса PEARL REFERENCE. Любое количество стоек, без тарелок.</p>
                        <hr />
                        <div className="price">
                            <div className="front">
                                <span class="price">8000<b>руб.</b></span>
                            </div>
                            <div className="back">
                                <p class="button" onClick={handleCall} >Заказать</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-option">
                        <i className="material-icons">art_track</i>
                        <h1>Комбоусилитель FENDER TWIN REVERB</h1>
                        <img src={fender} alt="FENDER TWIN REVERB" />
                        <hr />
                        <p>Гитарный комбоусилитель FENDER TWIN REVERB (2шт. В наличи)</p>
                        <hr />
                        <div className="price">
                            <div className="front">
                                <span className="price">5000<b>руб./шт</b></span>
                            </div>
                            <div className="back">
                                <p class="button" onClick={handleCall} >Заказать</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-option">
                        <i className="material-icons">art_track</i>
                        <h1>Басовый стэк AMPEG SVT5PRO + AMPEG 4x10</h1>
                        <img src={ampeg} alt="AMPEG SVT5PRO + AMPEG 4x10" />
                        <hr />
                        <p>Басовый стэк AMPEG SVT5PRO + AMPEG 4x10 мощностью 600Вт и описание</p>
                        <hr />
                        <div className="price">
                            <div className="front">
                                <span className="price">4000<b>руб.</b></span>
                            </div>
                            <div className="back">
                                <p class="button" onClick={handleCall} >Заказать</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;