import React from "react";
import { Link } from "react-router-dom";
import './tabs.scss';

const Header = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { path: "/", icon: "fa-desktop", label: "Студия" },
        { path: "/services", icon: "fa-firefox", label: "Услуги" },
        { path: "/video", icon: "fa-folder", label: "Видео" },
        { path: "/about", icon: "fa-folder", label: "О нас" }
    ];

    return (
        <div className="container">
            <section id="fancyTabWidget" className="tabs">
                <ul className="nav-tabs" role="tablist">
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
                            <div className="arrow-down">
                                <div className="arrow-down-inner"></div>
                            </div>
                            <Link to={tab.path}>
                                <span className={`fa ${tab.icon}`}></span>
                                <span className={`hidden-xs ${activeTab === index ? 'active' : ''}`}>
                                    {tab.label}
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
