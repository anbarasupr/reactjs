import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyGreeting from './components/1-functional-component/Greet'; // default import, no need to be in parenthesis and you can give any name
import { Greet, Hello as SayHello } from './components/1-functional-component/Greet'; // named export and it should be in parenthesis
import { Welcome } from './components/2-class-component/Welcome';
import { WithJSX, WithJSX2, WithoutJSX, WithoutJSX2, WithoutJSX3, WithoutJSX4, WithoutJSX5 } from './components/3-JSX/Hello';
import { FunctionalUserProps } from './components/4-props/FunctionalUserProps';
import { ClassUserProps } from './components/4-props/ClassUserProps';
import { Message } from './components/5-state/Message';
import { Counter } from './components/5-state/Counter';
import { BeforeDestructuringGreet, AfterDestructuringGreet } from './components/6-destructuring-prop-and-state/Greet';
import { DestructuredWelcome } from './components/6-destructuring-prop-and-state/Welcome';
import { FunctionClick } from './components/7-event-handling/FunctionClick';
import { ClassClick } from './components/7-event-handling/ClassClick';
import { EventBind } from './components/8-event-bind/EventBind';
import { ParentComponent } from './components/9-method-as-props/ParentComponent';
import { UserGreeting } from './components/10-conditional-rendering/UserGreeting';
import { NameList } from './components/11-list-rendering/NameList';
import { NameListIndex } from './components/11-list-rendering/NameListIndex';
import { ToDoList } from './components/11-list-rendering/IndexAsKeyAntipattern';
import { Stylesheet, Inline } from './components/12-styling/Stylesheet';
import style from './components/12-styling/appstyle.module.css'; // module level with imported class due to alias given
import './components/12-styling/appstyle.css'; // global level
import { Form } from './components/13-forms/form';
import { LifecycleA } from './components/14-life-cycle-hooks/LifeCycleA';

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
          {
            /* Functional Component */
            /* <div>
              <h1>Functional Component Example:</h1><hr />
              <SayHello />
              <MyGreeting />
              <Greet />
            </div> */
          }

          {
            /* Class Component */
            /* <div>
              <h1>Class Component Example:</h1><hr />
              <Welcome />
            </div> */
          }

          {
            /* JSX */
            /* <div>
              <h1>JSX Example:</h1><hr />
              <WithJSX />
              <WithJSX2 />
              <WithoutJSX />
              <WithoutJSX2 />
              <WithoutJSX3 />
              <WithoutJSX4 />
              <WithoutJSX5 />
            </div> */
          }

          {
            /* Props */
            /* <div>
              <h1>Props Example:</h1><hr />
              <FunctionalUserProps firstName='Anbu' lastName='Arasu' heroName='Wonder Woman'>
                <p> Hero Power : Super Human Strength & Speed </p>
              </FunctionalUserProps>

              <FunctionalUserProps firstName='Priya' lastName='Anbu' heroName='SuperMan'>
                <button>Fire</button>
              </FunctionalUserProps>

              <ClassUserProps firstName='Sharvesh' lastName='Anbu' heroName='Iron Man'>
                <p> Hero Power : Fire & Fly </p>
              </ClassUserProps>
            </div> */

          }

          {
            /* State */
           /*   <div>
              <h1>State Example:</h1><hr />
              <Message name='Anbu' />
              <Counter addValue='3' />
            </div>  */
          }

          {
            /* Destructuring prop */
            /*  <div>
               <BeforeDestructuringGreet firstName='Anbu' lastName='Arasu' />
               <AfterDestructuringGreet firstName='Anbu' lastName='Arasu' />
               <DestructuredWelcome firstName='Anbu' lastName='Arasu' />
             </div>   */
          }

          {
            /* Event handling */
            /*   <div>
                <FunctionClick />
                <ClassClick />
              </div> */
          }

          {
            /* Event Binding */
            /* <EventBind /> */
          }

          {
            /* Methods as props */
            /*  <ParentComponent componentName='Parent Component' /> */
          }

          {
            /* Conditional Rendering */
            /*  <UserGreeting /> */
          }

          {
            /* List Rendering  & Keys*/
            /*  <div>
             <NameList />
             <NameListIndex/>
             <ToDoList/>
             </div> */
          }
          {
            /* Styling */
            /*  <div>
               <Stylesheet primary={true}/>
               <Inline/>
               <h2 className='error'>App Error - Regular Stylesheet - Applies to child Components might lead css conflicts</h2>
               <h2 className={style.success}>App CSS Modules - Module Stylesheet</h2>
             </div> */
          }

          {
            /* Forms */
           /*  <Form /> */ 
          }

          {
            <div>
              <LifecycleA/>
            </div>
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