import React from 'react'

// function FRInput() {
//   return (
//     <div>
//       <input type="text"></input>
//     </div>
//   )
// }

const FRInput = React.forwardRef((props, ref) => { // forwardRef render functions accept exactly two parameters: props and ref. Any additional parameter will be undefined.
	console.log('FRInput forwardRef', props, ref);
	return (
		<div>
			<input type="text" ref={ref} />
		</div>
	)
})

export default FRInput
