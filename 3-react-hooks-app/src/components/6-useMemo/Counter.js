import React, { useState, useMemo } from 'react'

function Counter() {
	const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)

	const incrementOne = () => {
		setCounterOne(counterOne + 1)
	}

	const incrementTwo = () => {
		setCounterTwo(counterTwo + 1)
	}

	const isEven = () => {
		let i = 0
		while (i < 2000000000) i++ // to make a delay
		return counterOne % 2 === 0
	}

	return (
		<div>
			<div>
				<button onClick={incrementOne}>Count One - {counterOne}</button>
				<span>{isEven() ? 'Even' : 'Odd'}</span>
			</div>
			<div>
				<button onClick={incrementTwo}>Count Two - {counterTwo}</button>
			</div>
		</div>
	)
}

export default Counter


/*

useCallback and useMemo are very similair.

useCallback vs useMemo:
--------------------------
useCallback caches the provided funciton instance itself whereas the useMemo invokes the provided function and 
caches its result.

to cache a function, use useCallback, to cache the result of a invoked funciton, use useMemo.

*/
