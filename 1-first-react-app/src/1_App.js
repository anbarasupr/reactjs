import React from 'react';
import logo from './logo.svg';
import './App.css';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World, Stateless Functional Component
        </p>
      </header>
    </div>
  );
}

export default App; */

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello World, Stateful Class Component
          </p>
        </header>
      </div>
    )
  }
}



/*
  Component - Two types
  1.  Stateless Functional Component
  EX:
  function welcome(props)
  {
    return <h1>Hello, {props.name}</h1>;
  }

  2. Stateful Class Component
  Ex:
  class Welcome extends React.Component{
    render(){
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

*/