import React from "react";
import { Link } from "react-router-dom";

import './tabs.scss';

const Header = ({activeTab, setActiveTab}) => {

  return (
      <div className="container">
          <section id="fancyTabWidget" className="tabs">
              <ul className="nav-tabs" role="tablist">
                  <Link to='/'
                      className={`tab fancyTab ${activeTab === 0 ? 'active' : ''} ${activeTab === 1 ? 'border_right' : ''}`}
                      onClick={() => setActiveTab(0)}
                      role="tab"
                      aria-controls="tabBody0"
                      aria-selected={activeTab === 0}
                      tabIndex="0"
                  >
                      <div className="arrow-down">
                          <div className="arrow-down-inner"></div>
                      </div>
                      <Link to='/'>
                          <span className="fa fa-desktop"></span>
                          <span className={`hidden-xs ${activeTab === 0 ? 'active' : ''}`}>Cтудия</span>
                      </Link>
                      {/* <div className="whiteBlock"></div> */}
                  </Link>
                  <Link to='/services'
                      className={`tab fancyTab ${(activeTab === 1 ? 'active' : '')} ${activeTab === 0 ? 'border_left' : ''} ${activeTab === 2 ? 'border_right' : ''}`}
                      onClick={() => setActiveTab(1)}
                      role="tab"
                      aria-controls="tabBody1"
                      aria-selected={activeTab === 1}
                      tabIndex="0"
                  >
                      <div className="arrow-down">
                          <div className="arrow-down-inner"></div>
                      </div>
                      <Link to='/services'>
                          <span className="fa fa-firefox"></span>
                          <span className="hidden-xs">Услуги</span>
                      </Link>
                      {/* <div className="whiteBlock"></div> */}
                  </Link>
                  <Link to='/video'
                      className={`tab fancyTab ${activeTab === 2 ? 'active' : ''} ${activeTab === 1 ? 'border_left' : ''} ${activeTab === 3 ? 'border_right' : ''}`}
                      onClick={() => setActiveTab(2)}
                      role="tab"
                      aria-controls="tabBody2"
                      aria-selected={activeTab === 2}
                      tabIndex="0"
                  >
                      <div className="arrow-down">
                          <div className="arrow-down-inner"></div>
                      </div>
                      <Link to='/video'>
                          <span className="fa fa-folder"></span>
                          <span className="hidden-xs">Видео</span>
                      </Link>
                      {/* <div className="whiteBlock"></div> */}
                  </Link>
                  <Link to='/about'
                      className={`tab fancyTab ${activeTab === 3 ? 'active' : ''} ${activeTab === 2 ? 'border_left' : ''} `}
                      onClick={() => setActiveTab(3)}
                      role="tab"
                      aria-controls="tabBody3"
                      aria-selected={activeTab === 3}
                      tabIndex="0"
                  >
                      <div className="arrow-down">
                          <div className="arrow-down-inner"></div>
                      </div>
                      <Link to='/about'>
                          <span className="fa fa-folder"></span>
                          <span className="hidden-xs">О нас</span>
                      </Link>
                      {/* <div className="whiteBlock"></div> */}
                  </Link>
              </ul>
          </section>
      </div>
  );
};

export default Header;
