import React from "react";
import { Link } from "react-router-dom";

import './sheduleBtn.scss';

const SheduleBtn = () => {
    return (
        <>
            <Link to='/shedule' className="animated-button1">
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