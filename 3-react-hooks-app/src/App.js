import logo from './logo.svg';
import './App.css';
import UseStateTest from './components/1-useState/useStateTest';
import UseEffectTest from './components/2-useEffect/useEffectTest';
import UseContextTest from './components/3-useContext/useContextTest';
import UseReducerTest from './components/4-useReducer/useReducerTest';
import UseCallbackTest from './components/5-useCallback/useCallbackTest';
import UseMemoTest from './components/6-useMemo/useMemoTest';
import UseRefTest from './components/7-useRef/useRefTest';
import UseCustomHookTest from './components/8-customHooks/useCustomHookTest';


function App() {
  return (
    <div className="App">
      <h2>React Hooks</h2>
      <header className="App-header">
        {
          //<UseStateTest></UseStateTest>
          //<UseEffectTest></UseEffectTest>
          // <UseContextTest></UseContextTest>
          // <UseReducerTest></UseReducerTest>
          // <UseCallbackTest></UseCallbackTest>
          // <UseMemoTest></UseMemoTest>
          // <UseRefTest></UseRefTest>
          <UseCustomHookTest></UseCustomHookTest>
        }
      </header>
    </div>
  );
}

export default App;
