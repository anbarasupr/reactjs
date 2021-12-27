import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext';

export class ComponentE extends Component {
	static contextType = UserContext;
	render() {
		return (
			<div>
				Component E Context : {this.context}
				<ComponentF />
			</div>
		)
	}
}
// ComponentE.contextType = UserContext;
export default ComponentE


/**
 * Using contextType to read the context is much simpler.
 * 
 * Limitations of contextType:
 * 1. only works in class components
 * 2. we can subscribe to single context usign contextType. 
 *    If we want to read more than one context, then Consumer Component is the way to go given in ComponentE.
 * 
 * 
 */
