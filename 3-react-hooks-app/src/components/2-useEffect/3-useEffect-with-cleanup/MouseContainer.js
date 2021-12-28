import React, { useState } from 'react'
import HookMouse from '../2-run-effects-only-once/HookMouse'

function MouseContainer() {
	const [display, setDisplay] = useState(true)
	return (
		<div>
			<button onClick={() => setDisplay(!display)}>Toggle display</button>
			{display && <HookMouse />}
		</div>
	)
}

export default MouseContainer
