import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './tabs.scss';

const Header = ({ activeTab, setActiveTab }) => {
    const [ slideUp, setSlideUp ] = useState(false);

    useEffect(() => {
        window.slideTimer = setTimeout(() => {
            setSlideUp(true);
        }, 4500);

        return () => clearTimeout(window.slideTimer);
    }, [])

    const handleOnClickSlideDown = () => {
        setSlideUp(false);

        clearTimeout(window.slideTimer); // очистка перед новым таймером
        window.slideTimer = setTimeout(() => {
            setSlideUp(true);
        }, 4500);
    }

    const tabs = [
        { path: "/", icon: "fa-solid fa-microphone-lines", label: "Реп. база" },
        { path: "/services", icon: "fa-solid fa-people-arrows", label: "Аренда" },
        { path: "/media", icon: "fa-solid fa-photo-film", label: "Медиа" },
        { path: "/about", icon: "fa-solid fa-people-group", label: "Мы" }
    ];
    
    return (
        <div
            className={slideUp? 'container slide_up' : 'container'}
            onClick={handleOnClickSlideDown}
        >
            <section id="fancyTabWidget" className="tabs">
                <ul className="nav-tabs" role="tablist" >
                    {tabs.map((tab, index) => (
                        <Link
                            key={index}
                            to={tab.path}
                            className={`tab fancyTab ${activeTab === index ? 'active' : ''} ${
                                activeTab === index - 1 ? 'border_left' : ''
                            } ${activeTab === index + 1 ? 'border_right' : ''}`}
                            onClick={() => setActiveTab(index)}
                            role="tab"
                            aria-controls={`tabBody${index}`}
                            aria-selected={activeTab === index}
                            tabIndex="0"
                        >
                            <div className={!slideUp? 'arrow-down arrow_slide_up' : 'arrow-down arrow_slide_down'} >
                                <div className="arrow-down-inner"></div>
                            </div>
                            <Link to={tab.path}>
                                <span className={`fa ${tab.icon}`}></span>
                                <span className={`hidden-xs ${activeTab === index ? 'active' : ''}`}>
                                    {tab.label}
                                    {/* если слов больше чем одно - разделяет каждое на свою строку */}
                                    {/* {tab.label.split(' ').map((word, i) => (
                                        <span key={i} style={{ display: 'block' }}>{word}</span>
                                    ))} */}
                                </span>
                            </Link>
                        </Link>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Header;
