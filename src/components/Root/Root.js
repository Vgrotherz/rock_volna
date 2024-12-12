import React, { useState } from 'react';
import './root.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


function Root() {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <>
      <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
        <main>
          <Outlet />
        </main>
      <Footer setActiveTab={setActiveTab} />
    </>
  )
}

export default Root;
