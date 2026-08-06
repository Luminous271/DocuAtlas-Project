import { useState } from "react";

function Button({ text, message, type = "Regular", onClick}) {
    return (
        <button className="button" 
                onClick={onClick} >
                        {text}
        
        </button>
    );
}

export default Button;