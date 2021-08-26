import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={incrementCount}>Functional Component - Count {count}</button>
            <button onClick={() => { setCount(count + 1); }}>Functional Component - Count {count}</button>
        </div>
    )
}

export default HookCounter
