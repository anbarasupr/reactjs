import React, { Component } from 'react'

export class ErrorBoundary extends Component {
	constructor(props) {
		super(props)

		this.state = {
			hasError: false
		}
	}

	static getDerivedStateFromError(error) {
		return { hasError: true }
	}

	componentDidCatch(error, info) {
		console.log(error)
		console.log(info)
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary

/**
 * Error Boundary:
 * -------------
 * A class component that implements either one or both of the lifecycle methods below  becomes an error boundary
 * 	static getDerivedStateFromError
 *  componentDidCatch
 * 
 * The static method getDerivedStateFromError is used to render a fallback UI after an error is thrown and the 
 * componentDidCatch method is used to log the error information
 * 
 * 
 * Error boundaries are React components that catch javascript error in their child component tree, log those errors 
 * and display a fallback Ui.
 * 
 * The placement of the Error Boundary also matters as it controls if the entire app should have the fall-back UI 
 * or just the component causing the problem.
 */
