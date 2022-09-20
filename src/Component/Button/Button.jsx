import React from "react";

const Button = () => {
    const handleClick = (e) => {
        fetch(`https://demo.dataverse.org/api/search?q=apple`).then(res => res.json()).then(res => {
            console.log("result", res)
        })
    }
    return (
        <button data-testid="btn-click"  onClick={(e)=>handleClick(e)}>Click here</button>
    )
}

export default Button;