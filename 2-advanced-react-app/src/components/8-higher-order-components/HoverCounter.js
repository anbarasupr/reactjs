import React, { Component } from 'react'
import withCounter from './withCounter'
import UpdatedComponent from './UpdatedComponent';

class HoverCounter extends Component {
	// Without HOC
	/* constructor(props) {
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
	} */

	// With HOC
	render() {
		const { count, incrementCount } = this.props
		return <h2 onMouseOver={incrementCount}> {this.props.name} Hovered {count} times</h2>
	}
}

// Without HOC
// export default HoverCounter;
// export default UpdatedComponent(HoverCounter);

// With HOC
export default withCounter(HoverCounter, 10)
