import React from "react";
import { Link } from "react-router-dom";

import './sheduleBtn.scss';

const SheduleBtn = ({ scrollTarget }) => {
    const linkState = 
        scrollTarget === "small" 
        ? { scrollToSmall: true } 
        : scrollTarget === "big"
        ? { scrollToBig: true } 
        : null;

    return (
        <>
            <Link to="/shedule" 
            state={linkState}
            className="animated-button1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Расписание
            </Link>
        </>
    )
}

export default SheduleBtn;