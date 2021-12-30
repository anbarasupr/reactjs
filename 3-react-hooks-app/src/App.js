import logo from './logo.svg';
import './App.css';
import UseStateTest from './components/1-useState/useStateTest';
import UseEffectTest from './components/2-useEffect/useEffectTest';
import UseContextTest from './components/3-useContext/useContextTest';
import UseReducerTest from './components/4-useReducer/useReducerTest';


function App() {
  return (
    <div className="App">
      <h2>React Hooks</h2>
      <header className="App-header">
        {
            //<UseStateTest></UseStateTest>
            //<UseEffectTest></UseEffectTest>
           // <UseContextTest></UseContextTest>
            <UseReducerTest></UseReducerTest>
        }



       

        

        {
          // ------useContext hook------

        }
      </header>
    </div>
  );
}

export default App;
