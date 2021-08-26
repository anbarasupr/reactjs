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
	
	
	
	

1. useState Hook:
-----------------

* The useState hook let you add state to functional components
* In classess, the state is always an object
* With the useState hook, the state doesnt have to be an object
* THe useState hook returns an array with 2 elements
* The first element is the current value of the state, and the second element is the setter function to set the state value
* If new state value depends on the previous state, then pass a function to the setter function which reveives the previous state as an argument
* With useState hook, When dealing with boject or arrays, always make sure to spread your state variable in the setter function which copies all the state values and override the required property.
