import React from "react";

import './cancel.scss';

const Cancel = () => {
    return(
        <>
            <div className="cancel_container">
                <button class="comic-button">
                    <span>Отменить</span>
                    <span>запись</span>
                </button>
            </div>
        </>
    )
}

export default Cancel;