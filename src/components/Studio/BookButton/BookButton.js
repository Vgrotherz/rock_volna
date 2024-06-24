import React, { useState } from "react";
import Contact from "../../Contact/Contact";

const BookButton = () => {
    const [ showPopup, setShowPopup ] = useState(false);
 
    const handleClickButton = () => {
      setShowPopup(!showPopup);
    }
    return(
        <>
            <div>
                { !showPopup? (
                  <button onClick={handleClickButton}>Записаться на репетицию</button>
                ) : (
                  <Contact />
                )}
                
            </div>
        </>
    )
}

export default BookButton;