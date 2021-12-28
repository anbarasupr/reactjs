import React, { useState } from 'react'

function HookCounterWithObject() {
    const [name, setName] = useState({ firstName: '', lastName: '' });

    return (
        <div>
            <h3>use Spread Operator in the setter to merge the values</h3>
            <label>First Name:</label>
            {/*  <input type='text' value={name.firstName} onChange={e => setName({ firstName: e.target.value })} /> */}
            <input type='text' value={name.firstName || ''} onChange={e => setName({ ...name, firstName: e.target.value })} />
            <label>Last Name:</label>
            {/* <input type='text' value={name.lastName} onChange={e => setName({ lastName: e.target.value })} /> */}
            <input type='text' value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterWithObject
