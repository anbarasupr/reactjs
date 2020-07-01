import React from 'react';
import './App.css';
import { FragmentDemo, Table, FragmentDemo1 } from './components/1-fragment/Fragment';
import { PureComp,ParentComp } from './components/2-pure-component/Fragment';
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            /* Fragment */
            /*  <>
             <FragmentDemo />
             <Table/>
             <FragmentDemo1/>
             </> */
          }

          {
            /* Component & PureComponent */
            <>
              <ParentComp />
            </>
          }

        </header>
      </div>
    )
  }
}



/*
  Component - Two types
  1.  Stateless Functional Component
  EX:
  import React from 'react';
  function welcome(props)
  {
    return <h1>Hello, {props.name}</h1>;
  }

  2. Stateful Class Component
  Ex:
  import React from 'react';
  class Welcome extends React.Component{
    render(){
      return <h1>Hello, {this.props.name}</h1>;
    }
  }



  Before 16.7.0 version,

  Stateless Functional Component
    1. Simple Functions
    2. Use Func Components as much as possible
    3. Absence of this keyword
    4. Solution without using state
    5. Mainly responsible for the UI
    6. Stateless/ Dumb/ Presentational


  Stateful Class Component
    1. More feature rich
    2. Maintain their owm private data - state
    3. Complex UI Logic
    4. Provide lifecycle hooks
    5. Stateful/ Smart/ Container

    After 16.7.0 react version,
    Functional Component is not going to be a stateless or dumb.
    Here after, functional component can provide lifecycle hooks and it is Stateful/ Smart/ Container compoent as like Class component.
    So there is no stateless from here onwards. So we have just Functional and Class Component.
*/