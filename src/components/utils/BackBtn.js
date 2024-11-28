import React from "react";
import { useNavigate } from 'react-router-dom'

const BackBtn = ({ setActiveTab }) => {
    const navigate = useNavigate()

    const goHome = (e) => {
        e.preventDefault();
        // behevior auto - мгновенно вверх
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/');
        setActiveTab(0);
    }

    return(
        <>
            <button onClick={goHome}>На главную</button>
        </>
    )
}

export default BackBtn;