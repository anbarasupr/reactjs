import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/1-useStateHook/ClassCounter';
import HookCounter from './components/1-useStateHook/HookCounter';
import HookCounterWithPreviousState from './components/2-useStateWithPreviousState/HookCounterWithPreviousState';

function App() {
  return (
    <div className="App">
      <h2>React Hooks</h2>
      <header className="App-header">
        {
          /* <div>
            <h2>1. UseState Hook</h2>
            <ClassCounter></ClassCounter>
            <HookCounter></HookCounter>
          </div> */
        }

        {
          <div>
            <h2>2. UseState With Previous State (Safe)</h2>
            <HookCounterWithPreviousState></HookCounterWithPreviousState>
          </div>
        }
      </header>
    </div>
  );
}

export default App;
