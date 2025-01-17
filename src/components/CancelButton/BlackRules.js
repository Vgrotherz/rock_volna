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
                <div className="text_rules">
                    <h3>Выход из чёрного списка студии</h3>
                    <ol>
                        <h4>Группа может быть исключёна из чёрного списка, если исправит и выполнит обязательства перед студией.</h4>
                        <h4>Для исключения из чёрного списка клиент обязан оплатить все задолженности и штрафы, если таковые имеются.</h4>
                        <h4>В отдельных случаях могут быть предусмотрены дополнительные требования</h4>
                        <h4>Решение о выходе из чёрного списка принимается администрацией студии после тщательного рассмотрения всех обстоятельств и доказательств.</h4>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default BlackRules;