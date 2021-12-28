import React, { useState, useEffect } from 'react'

function HookCounterOne() {
	const [count, setCount] = useState(0)
	const [name, setName] = useState('')
	useEffect(() => {
		console.log('useEffect - Updating document title ')
		document.title = `You clicked ${count} times`
	}, [count, name])
	return (
		<div>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
			<button onClick={() => setCount(count + 1)}>
				useEffect - Click {count} times
			</button>
		</div>
	)
}

export default HookCounterOne

/**
 * useEffect is a combined effect of componentDidMount, componentDidUpdate, componentWillUnMount lifecycle
 * To conditionally execute useEffect, pass second argument which is a array of watchlist and add the required props or state variables to watch the changes.
 * If any change is happened in the watch list, then the useEffect will be called else not.
 * If the watch list is empty, then useEffect will be called only once and not called after every re-render or update
 */
