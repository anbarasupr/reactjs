import React from 'react';
import './App.css';
import { FragmentDemo, Table, FragmentDemo1 } from './components/1-fragment/Fragment';
import { PureComp, ParentComp } from './components/2-pure-component/PureComp';

import MemoComp from './components/3-memo/MemoComp';
import RefDemo from './components/4-refs/RefDemo';
import FocusInput from './components/4-refs-with-class-component/FocusInput';
import FRParentInput from './components/5-forwarding-refs/FRParentInput';
import PortalDemo from './components/6-portals/PortalDemo';
import Hero from './components/7-error-boundary/Hero';
import ErrorBoundary from './components/7-error-boundary/ErrorBoundary';
import ClickCounter from './components/8-higher-order-components/ClickCounter';
import HoverCounter from './components/8-higher-order-components/HoverCounter';
import ClickCounterTwo from './components/9-render-props/ClickCounterTwo';
import HoverCounterTwo from './components/9-render-props/HoverCounterTwo';
import User from './components/9-render-props/User';
import Counter from './components/9-render-props/Counter';
import ComponentC from './components/10-context/ComponentC';
import { UserProvider } from './components/10-context/userContext';
import PostForm from './components/axios/PostForm';
import PostList from './components/axios/PostList';
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
            /* <>
              <ParentComp />
            </> */
          }

          {
            // Memo
            /* <MemoComp name = 'Memo Component which is a Pure component for Functional Component'/> */
          }

          {
            // refs
            /* <RefDemo/> */
          }

          {
            // refs with class component
            // <FocusInput/>

          }

          {
            // forwarding ref
            // <FRParentInput />
          }

          {
            // portals
            // <PortalDemo />
          }

          { // Error boundary
            /*<div>
              <ErrorBoundary>
                <Hero heroName="Batman" />
              </ErrorBoundary>

              <ErrorBoundary>
                <Hero heroName="Superman" />
              </ErrorBoundary>
              
              <ErrorBoundary>
                <Hero heroName="Joker" />
              </ErrorBoundary>
            </div>*/
          }

          {
            // higher Order Component
            /*<>
              <ClickCounter name='Test'></ClickCounter>
              <br />
              <HoverCounter></HoverCounter>
            </>*/
          }

          {
            /* Without Render Props
            <>
              <ClickCounterTwo></ClickCounterTwo>
              <br />
              <HoverCounterTwo></HoverCounterTwo>
              <br />
              <User render={(isLoggedIn) => isLoggedIn ? 'Admin' : 'Guest'}></User>
            </>*/

            /* With Render Props*/
            /*<>
              <Counter render={
                (count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount}> </ClickCounterTwo>}>
              </Counter>

              <Counter render={
                (count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount}> </HoverCounterTwo>
              }>
              </Counter>
            </>*/

          }

          {
            // Context
            /*<UserProvider value ='Admin User'>
              <ComponentC />
            </UserProvider>*/
          }

          {
            // Axios
            <PostForm/>
            <PostList/>
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