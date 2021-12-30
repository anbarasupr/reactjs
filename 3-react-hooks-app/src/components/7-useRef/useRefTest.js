import React from 'react'
import ClassTimer from './2-useRef-to-access-useEffect-variable-outside/ClassTimer'
import HookTimerWithUseRef from './2-useRef-to-access-useEffect-variable-outside/HookTimer'
import FocusInput from './1-useRef-to-acces-dom/FocusInput'

export default function UseRefTest() {
    return (
        <div>
            {
                <div>
                    <h2>Access Dom With useRef</h2>
                    <FocusInput></FocusInput>
                </div>
            }
            {
                /*<div>
                    <ClassTimer></ClassTimer>
                    <h2>Clear Timer With useRef</h2>
                    <HookTimerWithUseRef></HookTimerWithUseRef>
                </div>*/
            }
        </div>
    )
}
