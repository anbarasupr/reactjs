import React, { useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function ParentComponent() {
	const [age, setAge] = useState(25)
	const [salary, setSalary] = useState(50000)

	const incrementAge = () => {
		setAge(age + 1)
	}

	const incrementSalary = () => {
		setSalary(salary + 1000)
	}

	return (
		<div>
			<Title />
			<Count text="Age" count={age} />
			<Button handleClick={incrementAge}>Increment Age</Button>
			<Count text="Salary" count={salary} />
			<Button handleClick={incrementSalary}>Increment Salary</Button>
		</div>
	)
}

export default ParentComponent

/*
	Without React.memo:
	------------------
	Wen we click age or salary, it will re-render all and it will impact the performance if there are large no of components
	
	Console.log without using react.memo
	-----------------------------------
	Title.js:4 Rendering Title
	Count.js:4 Rendering Age
	Button.js:4 Rendering button -  Increment Age
	Count.js:4 Rendering Salary
	Button.js:4 Rendering button -  Increment Salary


	What we want to achieve:
	-----------------------------------
	when we increment age, Title and Salary related components should not re-render and the same for salary increment also.

	To optimize the above, we can use React.memo
	
	React.memo:
	------------
	React.memo is a higher order component that will prevent a functional component from being re-rendered 
	if its props or state do not changes



	After using React.memo, still we see some performance issue below:
	-------------------------------------------------------------------
    We first see Title component, it has no props or state of its own and hence it is not re-render when we increment age or salary.
	Count accepts age as prop and Button accept incrementAge function as a prop which is dependent on age. 
	So when the age increments, both the age for Count and incrementAge for Button should re-render.
	But what we see, the incrementSalary for Button also re-render.

	Console.log after added React.memo
	----------------------------------------
	Count.js:4 Rendering Age
	Button.js:4 Rendering button -  Increment Age
	Button.js:4 Rendering button -  Increment Salary

	This is becuase, the new incrementSalary function will get created for each time the parent componet re-renders.
	And dealing with functions, we always have to consider the reference equality eventhough two functions have exact behaviour,
	it does not mean they are equal.

	The function before the re-render is always different after the re-render in reference equality because the function
	will get created newly when the parent compoent re-renders.



	since the function is a prop, React.memo sees that prop has changed and it will not prevent re-render.


	* useCallback will prevent this and it is for better optimization.

	useCallback Hook:
	---------------
	useCallback is a hook that will return a memoized version of the callback function that only changes if one of the 
	dependencies has changed.

	Why?
	----
	It is useful when passing callbacks to optimize child components that rely on refernce equality to prevent 
	unnecessary renders.

	Console.log after using useCallback
	----------------------------------------
	Count.js:4 Rendering Age
	Button.js:4 Rendering button -  Increment Age

	And now we achived the above said. When we increment age, 
	it will re-render only the age for Count and incrementAge for Button.


	WHy the useCallback to use is not a good idea for all the time. Pls check below post to understand.
	-----------------------------------------------------------------------------------------------------
	https://kentcdodds.com/blog/usememo-and-usecallback
*/