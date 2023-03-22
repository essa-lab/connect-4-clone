import React from "react";

const onClick = (id) => {

    alert('on click' + id);
}

const GameCircle = ({id,color, children}) => {
    console.log(id);
    return (
        <div style ={{backgroundColor : color}}onClick={()=>onClick(id)}>
            {children}
        </div>
    )
    
}

export default GameCircle