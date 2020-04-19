import React from 'react';

export const BeforeDestructuringGreet = props => {
    console.log(props);
    // const { firstName, lastName } = props;
    return (
        <div>
            <h1>
                Hello {props.firstName}, {props.lastName}
            </h1>
        </div>
    );
}


export const AfterDestructuringGreet = ({ firstName, lastName }) => {
    console.log(firstName, lastName);
    return (
        <div>
            <h1>
                Hello {firstName}, {lastName}
            </h1>
        </div>
    );
}