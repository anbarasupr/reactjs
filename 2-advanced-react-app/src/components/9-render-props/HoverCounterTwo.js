import React, { Component } from 'react'

class HoverCounterTwo extends Component {
	// Without Render props
	/*constructor(props) {
		super(props)

		this.state = {
			count: 0
		}
	}

	incrementCount = () => {
		this.setState(prevState => {
			return { count: prevState.count + 1 }
		})
	}

	render() {
		const { count } = this.state;
		return <button onMouseOver={this.incrementCount}>{this.props.name} Hovered {count} times</button>
	}*/

	// With Render props
	render() {
		const { count, incrementCount } = this.props
		return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
	}
}

export default HoverCounterTwo
