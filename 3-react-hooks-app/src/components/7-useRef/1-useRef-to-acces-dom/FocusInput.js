import React, { useRef, useEffect } from 'react'

function FocusInput() {
	const inputRef = useRef(null)
	useEffect(() => {
		inputRef.current.focus()
	}, [])

	return (
		<div>
			<input ref={inputRef} type="text" />
		</div>
	)
}

export default FocusInput


/*
	useRef:
	------
	Used to access Dom nodes directly in functional components.

	React will set the dom node in the current property to the ref variable.

*/