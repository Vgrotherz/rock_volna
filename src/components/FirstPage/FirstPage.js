import React from "react";  
import './firstPage.css';

const FirstPage = () => {
    return(
        <>
            <div className="first_page"> 
                <div className="first_page_pic">
                    <p className="pic_text">Фото 1</p>
                </div>
                <div className="first_page_pic">
                    <p className="pic_text">Фото 2</p>
                </div>
                <div className="first_page_pic">
                    <p className="pic_text">Фото 3</p>
                </div>
                <div className="first_page_pic">
                    <p className="pic_text">Фото 4</p>
                </div>
                {/* <img alt="картинка волны"></img> */}
            </div>
        </>
    )
}

export default FirstPage;