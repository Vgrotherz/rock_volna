import React from "react";

import soundEngineer from '../../media/uslugi/hands.jpg';
import jblSet from '../../media/uslugi/accousticSet.jpg';
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
                        
                        <div className="desktop_services">
                            <h1>Звукорежиссер на ваши мероприятия.</h1>
                            <img src={soundEngineer} alt="sound engineer" />
                            <hr />
                            <p>Ищете качественный звук на своем мероприятии? 
                                <br></br>
                            Мы предлагаем услуги профессионального звукорежиссера, который обеспечит безупречное звучание и техническую поддержку для вашего события.</p>
                            <hr />
                        </div>
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
                        <i className="material-icons">art_track</i>
                        <div className="desktop_services">
                            <h1>Комплект JBL VRX900</h1>
                            <img src={jblSet} alt="JBL VRX900" />
                            <hr />
                            <p>Для вашего мероприятия мы предлагаем комплект профессиональной звуковой аппаратуры JBL VRX900 – идеальное решение для создания мощного, качественного и сбалансированного звучания. 
                                <br></br>
                            Эта система обеспечивает кристально чистый звук и подходит для мероприятий любого масштаба.</p>
                            <hr />
                        </div>
                        <div className="price">
                            <div className="front">
                                <span className="price">30000<b>руб.</b></span>
                            </div>
                            <div className="back">
                                <p class="button" onClick={handleCall} >Заказать</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-option">
                        <i className="material-icons">perm_identity</i>
                        <div className="desktop_services">
                            <h1>Микшерный пульт BEHRINGER X32 RACK.</h1>
                            <div>
                                <img src={mixer} alt="behringer x32" />
                            </div>
                        
                            <hr />
                            <p>Идет в Комплекте с планшетом и роутером. 
                                <br></br>
                            Для вашего мероприятия предлагаем профессиональный цифровой микшерный пульт BEHRINGER X32 RACK, который обеспечивает максимальную гибкость управления звуком и подходит для самых разных форматов событий.</p>
                            <hr />
                        </div>
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
                        <div className="desktop_services">
                            <h1>Стейдж бокс Behringer S16</h1>
                            <img src={stageBox} alt="behringer s16" />
                            <hr />
                            <p>Behringer S16 — это идеальный выбор для профессиональных мероприятий, где важно обеспечить надежную и качественную связь между сценой и звуковой системой.</p>
                            <hr />
                        </div>
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
                        <div className="desktop_services">
                            <h1>Барабанная установка PEARL REFERENCE.</h1>
                            <img src={pearl} alt="PEARL REFERENCE" />
                            <hr />
                            <p>Эта установка премиум-класса идеально подходит для самых требовательных барабанщиков и обеспечивает мощное, сбалансированное и богатое звучание, которое раскрывается на любых площадках — от небольших залов до крупных сцен. 
                                <br></br>
                            Любое количество стоек, без тарелок.</p>
                            <hr />
                        </div>
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
                        <div className="desktop_services">
                            <h1>Комбоусилитель FENDER TWIN REVERB</h1>
                            <img src={fender} alt="FENDER TWIN REVERB" />
                            <hr />
                            <p> Fender Twin Reverb — выбор профессиональных музыкантов уже более 60 лет. Этот усилитель обладает мощным, насыщенным и кристально чистым звуком, идеально подходящим для самых разных музыкальных жанров, от джаза и блюза до рока и поп-музыки. 
                                <br></br>
                            В наличии 2 усилителя, которые готовы обеспечить ваше выступление на самом высоком уровне.</p>
                            <hr />
                        </div>
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
                        <div className="desktop_services">
                            <h1>Басовый стэк AMPEG SVT7PRO + AMPEG 4x10</h1>
                            <img src={ampeg} alt="AMPEG SVT5PRO + AMPEG 4x10" />
                            <hr />
                            <p>Для вашего мероприятия мы предлагаем профессиональный басовый стэк AMPEG SVT-7PRO с кабинетом AMPEG 4x10 мощностью 600Вт, который способен обеспечить мощное, насыщенное и глубокое звучание, идеально подходящее для любых музыкальных жанров. 
                                <br></br>
                            Это легендарное оборудование, которое заслуженно считается стандартом в мире бас-гитарного звука</p>
                            <hr />
                        </div>
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