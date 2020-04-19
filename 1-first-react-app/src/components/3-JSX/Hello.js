import React from 'react';

// With JSX
/*
    Below funny tag syntax is neither a string nor HTML.
    It is called JSX, and it is a syntax extension to JavaScript. 
    We recommend using it with React to describe what the UI should look like.
    JSX may remind you of a template language, but it comes with the full power of JavaScript.
    JSX makes code elegant and simple to understand
*/
const elementWithJSX = (
    <div className="greeting" id="greetId">
        <h1>Hello JSX!</h1>
        <h2>Good to see you here.</h2>
    </div>
);

// With JSX2
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const elementWithJSX2 = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);


// Without JSX
const elementWithoutJSX = React.createElement(
    'h1',
    {
        className: 'greeting',
        id: 'greetId'
    },
    'Hello!'
);

// Without JSX 2 using children property
const elementWithoutJSX2 = React.createElement(
    'h1',
    {
        className: 'greeting',
        id: 'greetId',
        children: 'Hello Children'
    }
);

// Without JSX 3 - Nesting elements
const elementWithoutJSX3 = React.createElement(
    'div',
    {
        className: 'dummyClass',
        id: 'hello',
    },
    React.createElement('h1', null, 'Hello Anbu')
);

// Without JSX 4 - Nesting elements (Mixing JSX and Without JSX)
const elementWithoutJSX4 = React.createElement(
    'div',
    {
        className: 'dummyClass',
        id: 'hello',
    },
    <h1>Hello Sharvesh</h1> // JSX syntax
);


// Without JSX 5 - Nesting elements with children property (Mixing JSX and Without JSX)
const elementWithoutJSX5 = React.createElement(
    'div',
    {
        className: 'dummyClass',
        id: 'hello',
        children: <h1>Hello Priya</h1> // JSX syntax
    }
);

export function WithJSX() {
    return elementWithJSX;
}

export function WithJSX2() {
    return elementWithJSX2;
}

export function WithoutJSX() {
    return elementWithoutJSX;
}

export function WithoutJSX2() {
    return elementWithoutJSX2;
}

export function WithoutJSX3() {
    return elementWithoutJSX3;
}

export function WithoutJSX4() {
    return elementWithoutJSX4;
}

export function WithoutJSX5() {
    return elementWithoutJSX5;
}