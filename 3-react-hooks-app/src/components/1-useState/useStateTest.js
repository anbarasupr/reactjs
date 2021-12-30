import React from 'react'
import ClassCounter from './1-useStateHook/ClassCounter';
import HookCounter from './1-useStateHook/HookCounter';
import HookCounterWithPreviousState from './2-useStateWithPreviousState/HookCounterWithPreviousState';
import HookCounterWithObject from './3-useStateWithObject/HookCounterWithObject';
import HookCounterWithArray from './4-useStateWithArray/HookCounterWithArray';
export default function UseStateTest() {
    return (
        <div>
            {
                <h2>useState Hook</h2>
                /*<div>
                    <h2>1. UseState Hook</h2>
                    <ClassCounter></ClassCounter>
                    <HookCounter></HookCounter>
                </div>*/

                /*<div>
                    <h2>2. UseState With Previous State (Safe)</h2>
                    <HookCounterWithPreviousState></HookCounterWithPreviousState>
                </div>*/

                /*<div>
                    <h2>3. UseState With Object type</h2>
                    <HookCounterWithObject></HookCounterWithObject>
                </div>*/

                /*<div>
                    <h2>4. UseState With Array type</h2>
                    <HookCounterWithArray></HookCounterWithArray>
                </div>*/

            }
        </div>
    )
}
