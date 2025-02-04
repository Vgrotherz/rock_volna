import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react";

import './App.css';
import './reset.css';



import Root from './components/Root/Root';
import Studio from "./components/Studio/Studio";
import About from "./components/About/About";
import Media from "./components/Media/Media";
import Services from "./components/Services/Services";
import Shedule from "./components/Shedule/Shedule";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root /> }>
        <Route index element={ <Studio /> } />
        <Route path="/shedule" element={ <Shedule /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/media" element={ <Media /> } />
        <Route path="/services" element={ <Services /> } />
    </Route>
));

function App() {
    return(
        <>
            <Analytics />
            <RouterProvider router={router} />
        </>
    )
}

export default App;