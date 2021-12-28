import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0);

    function incrementCount() {
        // setCount(count + 1);
        setCount(prevCount => prevCount+1);
    }
    console.log('HookCounter render count', count);
    return (
        <div>
            <button onClick={incrementCount}>Functional Component - Count {count}</button>
            <button onClick={() => { setCount(count + 1); }}>Functional Component - Count {count}</button>
            {new Date().toLocaleString()}
        </div>
    )
}

export default HookCounter
