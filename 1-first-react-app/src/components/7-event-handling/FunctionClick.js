import React from 'react';

export const FunctionClick = () => {
    function clickHandler(event) {
        console.log('Button clickHandler',event);
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

