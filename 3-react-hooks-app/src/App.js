import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/1-useState/1-useStateHook/ClassCounter';
import HookCounter from './components/1-useState/1-useStateHook/HookCounter';
import HookCounterWithPreviousState from './components/1-useState/2-useStateWithPreviousState/HookCounterWithPreviousState';
import HookCounterWithObject from './components/1-useState/3-useStateWithObject/HookCounterWithObject';
import HookCounterWithArray from './components/1-useState/4-useStateWithArray/HookCounterWithArray';
import ClassCounterOne from './components/2-useEffect/1-useEffect-after-render/ClassCounterOne';
import HookCounterOne from './components/2-useEffect/1-useEffect-after-render/HookCounterOne';
import ClassMouse from './components/2-useEffect/2-run-effects-only-once/ClassMouse';
import HookMouse from './components/2-useEffect/2-run-effects-only-once/HookMouse';
import IntervalClassCounter from './components/2-useEffect/4-useEffect-with-incorrect-dependency/IntervalClassCounter';
import IntervalHookCounter from './components/2-useEffect/4-useEffect-with-incorrect-dependency/IntervalHookCounter';
import MouseContainer from './components/2-useEffect/3-useEffect-with-cleanup/MouseContainer';

function App() {
  return (
    <div className="App">
      <h2>React Hooks</h2>
      <header className="App-header">
        {
          /*<div>
           <h2>1. UseState Hook</h2>
           <ClassCounter></ClassCounter>
           <HookCounter></HookCounter>
         </div>*/
        }

        {
          /* <div>
            <h2>2. UseState With Previous State (Safe)</h2>
            <HookCounterWithPreviousState></HookCounterWithPreviousState>
          </div> */
        }

        {
          /*<div>
            <h2>3. UseState With Object type</h2>
            <HookCounterWithObject></HookCounterWithObject>
          </div>*/
        }

        {

          /*<div>
            <h2>4. UseState With Array type</h2>
            <HookCounterWithArray></HookCounterWithArray>
          </div>*/
        }
        {
          /*<div>
            <h2>UseEffect After Render</h2>
            <ClassCounterOne />
            <HookCounterOne />
          </div>*/
        }

        {
          /*<div>
            <h2>UseEffect - Run Effects only once</h2>
            <ClassMouse />
            <HookMouse />
          </div>*/
        }
        {
          <div>
            <h2>UseEffect - With Cleanup</h2>
            <MouseContainer />
          </div>
        }

        {
          /*<div>
            <h2>UseEffect - With incorrect dependency</h2>
            <IntervalClassCounter />
            <IntervalHookCounter />
          </div>*/
        }
      </header>
    </div>
  );
}

export default App;
