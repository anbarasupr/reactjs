import React from 'react'


const UpdatedComponent = OriginalComponent => {
	class NewComponent extends React.Component {
		render() {
			return <OriginalComponent name='HOC Prop Test'></OriginalComponent>
		}
	}
	return NewComponent;
}

export default UpdatedComponent;


/**
 * Why HOC? - to share common functionality between components
 *
 * HOC - a pattern where a function takes a component an argument and returns a new component.
 *
 * Ex:
 * const NewComponent = higherOrderComponent(originalComponent)
 * const EnhancedComponent = higherOrderComponent(originalComponent)
 *
 * const IronMan = withSuit(TonyStark)
 *
 *
 * Here HOC hold the state and share the incrementCount functionality to CLickCounter and HoverCounter

 */