import React, {useContext} from 'react'
import { CountContext } from '../useReducerTest'

function ComponentA() {
  const countContext = useContext(CountContext)
  return (
    <div>
      Component A {countContext.countState}
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
			<button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
			<button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA


/**
 * useReducer with useContext:
 * ---------------------------
 * 
 * useReducer is for Local state management at component level.
 * To share the state between components which is a global state management, we can manage global state by combining
 * useReducer along with useContext.
 * 
 * Share state between components = Global State Management  = useReducer + useContext.
 *   
 */
