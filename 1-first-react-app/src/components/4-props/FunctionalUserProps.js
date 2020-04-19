import React from 'react';


function formatName(props) {
    return props.firstName + ' ' + props.lastName;
}

const user = {};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

export const FunctionalUserProps = (props) => {
    console.log('FunctionalUserProps props', props);
    return (
        <div>
            <h1>
                Hello, {formatName(props)}!
            </h1>
            <h2> My Hero : {props.heroName}</h2>
            {props.children}
        </div>
    );
}