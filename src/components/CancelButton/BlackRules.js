import React from "react";

import './blackRules.scss';

const BlackRules = ({ handleBlackRulesClick}) => {
    return(
        <>
            <div className="rules_container">
                <div className="outer" onClick={handleBlackRulesClick}>
                      <div className="inner">
                        <label className='label_class' >назад</label>
                      </div>
                </div>
                <div className="text_black_rules">
                    <h4>Способы выхода из чёрного списка:</h4>
                    <ol>
                        
                        <li>оплачиваешь стоимость прогула</li>
                        <li>если что то сломал - то платишь</li>
                    </ol>
                    <p>profit!</p>
                </div>
            </div>
        </>
    )
}

export default BlackRules;