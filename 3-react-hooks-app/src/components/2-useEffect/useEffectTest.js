import React from 'react'
import ClassCounterOne from './1-useEffect-after-render/ClassCounterOne';
import HookCounterOne from './1-useEffect-after-render/HookCounterOne';
import ClassMouse from './2-run-effects-only-once/ClassMouse';
import HookMouse from './2-run-effects-only-once/HookMouse';
import IntervalClassCounter from './4-useEffect-with-incorrect-dependency/IntervalClassCounter';
import IntervalHookCounter from './4-useEffect-with-incorrect-dependency/IntervalHookCounter';
import MouseContainer from './3-useEffect-with-cleanup/MouseContainer';
import DataFetching from './5-datafetching/DataFetching';
function UseEffectTest() {
    return (
        <div>
            <h2>useEffect Hook</h2>
            {
                /*<div>
                  <h2>UseEffect After Render</h2>
                  <ClassCounterOne />
                  <HookCounterOne />
                </div>*/

                /*<div>
                  <h2>UseEffect - Run Effects only once</h2>
                  <ClassMouse />
                  <HookMouse />
                </div>*/

                /*<div>
                  <h2>UseEffect - With Cleanup</h2>
                  <MouseContainer />
                </div>*/

                /*<div>
                  <h2>UseEffect - With incorrect dependency</h2>
                  <IntervalClassCounter />
                  <IntervalHookCounter />
                </div>*/

                /*<div>
                    <h2>UseEffect - Data Fetching Axios</h2>
                    <DataFetching />
                </div>*/
            }
        </div>
    )
}

export default UseEffectTest
