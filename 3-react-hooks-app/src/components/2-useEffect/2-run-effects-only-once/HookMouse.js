import React, { useState, useEffect } from 'react'

function HookMouse() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log('Mouse event')
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() => {
		console.log('useFffect called')
		window.addEventListener('mousemove', logMousePosition)

		// note that the useEffect cleanup function does not only run when our component wants to unmount,
		//  it also runs right before the execution of the next scheduled effect.
		return () => {
			console.log('Component unmounting code for cleanup')
			window.removeEventListener('mousemove', logMousePosition)
		}
	}, []); 


	console.log('HookMouse render called')

	return (
		<div>
			Hooks - X - {x} Y - {y}
		</div>
	)
}

export default HookMouse
