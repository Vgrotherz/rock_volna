import React from "react";

import './rules.scss';

const Rules = ({ handleRulesClick}) => {
    return(
        <>
            <div className="rules_container">
                <div className="outer" onClick={handleRulesClick}>
                      <div className="inner">
                        <label className='label_class' >назад</label>
                      </div>
                </div>
                <div className="text_rules">
                    <ol>
                        <li>не бухать</li>
                        <li>не трешовать</li>
                        <li>аппарат не ломать</li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Rules;