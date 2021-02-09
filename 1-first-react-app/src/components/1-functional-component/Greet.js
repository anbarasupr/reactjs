import React from 'react';

export function Hello() {
    return <h1>Hello Stateless Functional Component</h1>;
}


const Greeting = () => <h1>Hello Stateless Functional Component with Lambda, With default export</h1>;
export default Greeting;

export const Greet = () => <h1>Greet : Hello Stateless Functional Component with Lambda, With named export</h1>;


