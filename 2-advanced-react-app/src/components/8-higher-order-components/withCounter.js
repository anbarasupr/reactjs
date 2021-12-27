import React from 'react'

const withCounter = (WrappedComponent, incrementNumber) => {
	class WithCounter extends React.Component {
		constructor(props) {
			super(props)

			this.state = {
				count: 0
			}
		}

		incrementCount = () => {
			this.setState(prevState => {
				return { count: prevState.count + incrementNumber }
			})
		}
		render() {
			console.log('HOC withCounter render', this.props.name)
			return (
				<WrappedComponent
					count={this.state.count}
					incrementCount={this.incrementCount}
					{...this.props} // receive the props for  ClickCounter and HoverCounter from App.js and send the same to the ClickCounter and HoverCounter render method thru the HOC Component which is WrappedComponent here
				/>
			)
		}
	}
	return WithCounter
}

export default withCounter


/**
 * Why HOC? - to share common functionality between components without having to repeat the code
 * 
 * HOC - a pattern where a function takes a component an argument and returns a new component.
 * 
 * Ex:
 * const NewComponent = higherOrderComponent(originalComponent)
 * const EnhancedComponent = higherOrderComponent(originalComponent)
 * 
 * const IronMan = withSuit(TonyStark)
 * 
 * THe ClickCounter and HoverCounter have the count state and the incrementCount functionality. 
 * Here HOC Component hold the count state and the incrementCount functionality of ClickCounter and HoverCounter
 */