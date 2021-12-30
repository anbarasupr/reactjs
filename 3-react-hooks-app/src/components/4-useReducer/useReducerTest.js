import React, { useReducer } from 'react'
import CounterOne from './1-simple-state-and-action/CounterOne'
import CounterTwo from './2-complext-state-and-action/CounterTwo'
import CounterThree from './3-multiple-reducers/CounterThree'
import ComponentA from './4-useReducer-with-useContext/ComponentA'
import ComponentB from './4-useReducer-with-useContext/ComponentB'
import ComponentC from './4-useReducer-with-useContext/ComponentC'
import DataFetchingOne from './5-datafetching-with-useReducer/DataFetchingOne'
import DataFetchingTwo from './5-datafetching-with-useReducer/DataFetchingTwo'
const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const CountContext = React.createContext()

function UseReducerTest() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider
            value={{ countState: count, countDispatch: dispatch }}
        >
            <div>
                <h2>useReducer Hook</h2>
                {
                    /*<div>
                        <h3>useReducer with simple state and action</h3>
                        <CounterOne></CounterOne>
                    </div>*/
                }
                {
                    /*<div>
                        <h3>useReducer with complex state and action</h3>
                        <CounterTwo></CounterTwo>
                    </div>*/
                }
                {
                    /*<div>
                        <h3>Multiple useReducer</h3>
                        <CounterThree></CounterThree>
                    </div>*/
                }
                {
                    /*<div>
                        <h3>useReducer with useContext - For Global state management</h3>
                        <p>Count : {count}</p>
                        <ComponentA />
                        <ComponentB />
                        <ComponentC />
                    </div>*/
                }
                {
                    <div>
                        <h3>Data Fetching with useState and useReducer</h3>
                        {
                            // <DataFetchingOne></DataFetchingOne>
                            <DataFetchingTwo></DataFetchingTwo>
                        }
                    </div>
                }
            </div>
        </CountContext.Provider>
    )
}

export default UseReducerTest



/*
useReducer
---------
1. useReducer ia a hook that is used for state management
2. It is an alternative to useState


Diff b/w useState and useReducer:
-------------------------------
1. useState is build using with useReducer
2. useReducer is more primitive hook compared to useState


All the Hooks we have learned so far, we have a meaning behind their names
useState    related to -  state
useEffect   related to - side effects
useContext  related to - context API
useReducer  related to - reducers


What is reducer in javascript?;
------------------------------
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

Array.prototype.reduce()
The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise array element 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:

const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.


reduce vs useReducer:
--------------------
reducer in javascript								useReducer in React
----------------------------------------------------------------------------------------------------------
array.reduce(reducer, initialValue)					useReducer(reducer, initialState)
singleValue = reducer(accumulator, itemValue)		newState = reducer(currentState, action)
array.reduce method returns a single value			useReducer returns a pair of values.
													[newState, dispatch] - dispatch is basically used to specify a action




When to use?:
------------
Scenario		                useState                                useReducer
--------------------------------------------------------------------------------------------------------------------------
Type of State                   Number/String,Boolean               	Object or Array
Number of state Transitions     One or Two                           	Too many (all of the state transitions happen at one place)
Related state transitions?      No                                      Yes (loading, response success/failure, error)
Business Logic                  No business logic          				Complex Business logic (all logic is localized to reducer function 
																		and you have better separation of concerns. All your component is
																		to do dispatch the right action. Makes code readable and mantainable)

Local vs Global                 Local                       			Global
                                (With useState, we would have to pass	(with useReducer, we simply have to pass one dispatch method
                                down multiple update methods, one for	down to the component tree. That one dispatch method will update
                                each state)                             several state varaibles based on the action type)
                                                                
                                                                
 */