import React from 'react';
import './root.css';

// import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


function Root() {
  return (
    <>
      <Header /> 
        <main className='body'>
          <Outlet />
        </main>
      <Footer />
    </>
  )
}

export default Root;
