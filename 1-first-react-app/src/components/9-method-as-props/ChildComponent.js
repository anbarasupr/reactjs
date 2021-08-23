import React from 'react';

export const ChildComponent = (props) => {
    return (
        <div>
            {
                /* Cannot pass parameters fomr here */
                <button onClick={props.greetHandler}>Greet Parent No Param</button>
            }

            {
                /* To pass parameter, use arrow function method */
                <button onClick={() => props.greetHandler('Child')}>Greet Parent</button>

            }
        </div>
    )
}