import React from "react";

import LoaderGears from "../utils/LoaderGears";

import './loadShedule.scss';

const LoadShedule = () => {
    return(
        <div className="load_table">  
            <LoaderGears />
            
            <table className='table_block'>
                <tbody className='tbody_font' >
                    <tr >
                        <td className="csv_td td_one"></td>
                        <td className="csv_td">12-14</td>
                        <td className="csv_td">14-16</td>
                        <td className="csv_td">16-18</td>
                        <td className="csv_td">18-20</td>
                        <td className="csv_td">20-22</td>
                    </tr>
                    <tr >
                        <td className="csv_td td_one">пн</td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                    </tr>
                    <tr >
                        <td className="csv_td td_one">вт</td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                    </tr>
                    <tr >
                        <td className="csv_td td_one">ср</td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                    </tr>
                    <tr >
                        <td className="csv_td td_one">чт</td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                    </tr>
                    <tr >
                        <td className="csv_td td_one">пт</td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                    </tr>
                    <tr >
                        <td className="csv_td td_one">сб</td>
                        <td className="csv_td">нр</td>
                        <td className="csv_td">нр</td>
                        <td className="csv_td">нр</td>
                        <td className="csv_td">нр</td>
                        <td className="csv_td">нр</td>
                    </tr>
                    <tr >
                        <td className="csv_td td_one">вс</td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                        <td className="csv_td"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LoadShedule;