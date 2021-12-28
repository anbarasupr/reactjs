import React, { useState } from 'react'

function HookCounterWithPreviousState() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            // setCount(count + 1);  // not safe and increment wont happen correctly. use previous state always if the current state depends on previous state
            setCount(prevCount => prevCount + 1);
        }
    }

    return (
        <div>
            <div>Count : {count}</div>
            <button onClick={() => { setCount(initialCount) }}>Reset</button>
            { /*<h2>Below are not safe operations since the current state depends on previous.</h2>            
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
            <button onClick={() => { setCount(count - 1) }}>Decrement</button> */ }


            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <div>
                <button onClick={incrementFive}>Increment Five</button>
            </div>
        </div>
    )
}

export default HookCounterWithPreviousState
