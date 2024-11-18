import React from "react";

import './App.css';
import './reset.css';

import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'

import Root from './components/Root/Root';
import FirstPage from "./components/FirstPage/FirstPage";
import Studio from "./components/Studio/Studio";
import BigHall from "./components/Studio/BigHall/BigHall";
import SmallHall from "./components/Studio/SmallHall/SmallHall";
import About from "./components/About/About";
import Video from "./components/Video/Video";
import Services from "./components/Services/Services";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root /> }>
        <Route index element={ <Studio /> } />
        {/* <Route path="/studio" element={ <Studio /> } /> */}
        <Route path="/big_hall" element={ <BigHall /> } />
        <Route path="/small_hall" element={ <SmallHall /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/video" element={ <Video /> } />
        <Route path="/services" element={ <Services /> } />
    </Route>
));

function App() {
    return(
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App;