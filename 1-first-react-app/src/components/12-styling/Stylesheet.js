import React from 'react';
// 1. CSS Stylesheets
export function Stylesheet(props) {
    let className = props.primary ? 'primary' : '';
    return (
        <div>
            {
                /*  Below 4 lines work. eventhough those classes are not imported here, but imported from app component which applies to all its child component and it is working */
                <div>
                    <h1 className='primary'>Css</h1>
                    <h1 className={className}>Stylesheets</h1>
                    <h1 className={`${className} font-xl`}>Stylesheets</h1>
                    <h2 className='error'>Stylesheet Error</h2>
                </div>
            }
            {
                /* Wont work becuase the imported style module in app component is appplies to it only not for others child components of APP component */
                /*   <h2 className={style.success}>Stylesheet CSS Modules</h2> */
            }

        </div>
    )
}

// 2. inline styling
const heading = {
    fontSize: '100px',
    color: 'blue'
};

export function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

/*
    Styling React Components
    1. CSS Stylesheets - ( Regular Stylesheet - Applies to child Components might lead css conflicts )
    2. Inline Styling
    3. CSS Modules - local to the class where it is imported
    4. CSS in JS libraries (Styled Components)
*/