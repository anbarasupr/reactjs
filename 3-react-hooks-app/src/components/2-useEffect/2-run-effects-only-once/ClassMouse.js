import React, { Component } from 'react'

class ClassMouse extends Component {
	constructor(props) {
		super(props)

		this.state = {
			x: 0,
			y: 0
		}
	}

	logMousePosition = e => {
		this.setState({ x: e.clientX, y: e.clientY })
	}

	componentDidMount() {
		console.log('ClassMouse	componentDidMount called')
		window.addEventListener('mousemove', this.logMousePosition)
	}

	componentWillUnmount() {
		console.log('ClassMouse componentWillUnmount called')
		window.removeEventListener('mousemove', this.logMousePosition)
	}

	render() {
		console.log('ClassMouse render called')
		return (
			<div>
				X - {this.state.x} Y - {this.state.y}
			</div>
		)
	}
}

export default ClassMouse
