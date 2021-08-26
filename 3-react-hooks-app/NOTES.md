React Hooks:
-----------
Hooks are a new feature addition in React version 16.8 which allow you to use React features without having to write a class.

Ex: State of a Component

Hooks dont work inside classes

Allow you to use react features without having to write a class

Allow you to resue stateful logic


	Why Hooks:
	---------
	Reason Set 1:
	* Understand how this keyword works in javascript
	* Remenber to bind event handlers in class components
	* Classes dont minify very well and make hot reloading very unreliable
	
	Reason Set 2:
	* There is no particular way to reuse stateful component logic
	* Higher Order Components (HOC) and render props patters do address this problem but needs component restructure which looks awkward and hard to follow.
	* There is need to share stateful logic in a better way without changing component hierarchy
	
	Reason Set 3:
	*	Create components for complex scenarios such as data fetching and suscribing to events
	* 	Related code is not organized in one place
		Ex: Data fetching - In componentDidMount and componentDidUpdate
			Event Listneres - Create in componentDidMount and unsubscribe in componentWillUnmount
	* Because of stateful logic - Connot break components into smaller ones
	
	
	
	

