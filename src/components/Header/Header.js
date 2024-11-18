import React from "react";
import { Link } from "react-router-dom";

import './tabs.scss';

const Header = ({activeTab, setActiveTab}) => {
//   const [activeTab, setActiveTab] = useState(0);

  return (
      <div className="container">
          <section id="fancyTabWidget" className="tabs">
              <ul className="nav-tabs" role="tablist">
                  <li
                      className={`tab fancyTab ${activeTab === 0 ? 'active' : ''}`}
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
                          <span className="hidden-xs">Cтудия</span>
                      </Link>
                      <div className="whiteBlock"></div>
                  </li>
                  <li
                      className={`tab fancyTab ${activeTab === 1 ? 'active' : ''}`}
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
                      <div className="whiteBlock"></div>
                  </li>
                  <li
                      className={`tab fancyTab ${activeTab === 2 ? 'active' : ''}`}
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
                      <div className="whiteBlock"></div>
                  </li>
                  <li
                      className={`tab fancyTab ${activeTab === 3 ? 'active' : ''}`}
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
                      <div className="whiteBlock"></div>
                  </li>
              </ul>
              <div className="tab-content" aria-live="polite">
                  <div
                      className={`tab-pane fade ${activeTab === 0 ? 'active in' : ''}`}
                      id="tabBody0"
                      role="tabpanel"
                      aria-labelledby="tab0"
                      aria-hidden={activeTab !== 0}
                      tabIndex="0"
                  >
                      <p>фото</p>
                  </div>
                  <div
                      className={`tab-pane fade ${activeTab === 1 ? 'active in' : ''}`}
                      id="tabBody1"
                      role="tabpanel"
                      aria-labelledby="tab1"
                      aria-hidden={activeTab !== 1}
                      tabIndex="0"
                  >
                      <p>Саня работает</p>
                  </div>
                  <div
                      className={`tab-pane fade ${activeTab === 2 ? 'active in' : ''}`}
                      id="tabBody2"
                      role="tabpanel"
                      aria-labelledby="tab2"
                      aria-hidden={activeTab !== 2}
                      tabIndex="0"
                  >
                      <p>видево</p>
                  </div>
                  <div
                      className={`tab-pane fade ${activeTab === 3 ? 'active in' : ''}`}
                      id="tabBody3"
                      role="tabpanel"
                      aria-labelledby="tab3"
                      aria-hidden={activeTab !== 3}
                      tabIndex="0"
                  >
                      <p>о нас</p>
                  </div>
              </div>
          </section>
      </div>
  );
};

export default Header;
