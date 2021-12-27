import React from 'react';
import { LifecycleB } from './LifeCycleB';

export class LifecycleA extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Initial State A'
        };
        console.log('LifecycleA constructor', props);
    }

    changeState = () => {
        this.setState({
            name: 'Updating Phase A'
        });
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps', props, state);
        return { name: 'State Modified A' };
        return null;
    }

    render() {
        console.log('LifecycleA render', this.props, this.state);
        return (
            <div>
                <p> Lifecycle A</p>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />
            </div>
        );
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount');
    }

    // Updating Phase
    /* 
         To trigger an update life cycle, we need to change either props or state 
        render & coponentDidUpdate are most common methods in updating phase
    */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifecycleA shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate', prevProps, prevState);
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifecycleA componentDidUpdate', prevProps, prevState, snapshot);
    }

    // Unmounting phase
    componentWillUnmount() {
        console.log('LifecycleA componentWillUnmount');
    }

    // Error Handling phase
    static getDerivedStateFromError(error) {
        console.log('LifecycleA getDerivedStateFromError', error);
    }
    componentDidCatch(error, info) {
        console.log('LifecycleA componentDidCatch', error, info);
    }
}


/*
    Lifecycle Hooks:

    Four phases:
    -----------
    Mounting - When an instance of a component is being created and inserted into the DOM
    Updating - When a component is being re-rendered as a result of changes to either its props or state.
    Unmounting - When a component is being removed from the DOM
    Error Handling - When there is an error during rendering, in a lifecycle method, or in the constructor of any child component

    Lifecycle Methods:
    Mounting - constructor, static getDerivedStateFromProps, render and componentDidMount
    Updating - static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate
    Unmounting - componentWillUnmount
    Error Handling - static getDerivedStateError and componentDidCatch


    Methods:
    1. Mounting Phase
        1. constructor
                        - A special function that will get called whenever a new component is created
                        - Initializing state
                        - Binding the event handlers
                        - Do not cause side effects Ex: Http requests
                        - super(props) - when overriding constructor, always call its super
                        - Directly override this.state

        2. getDerivedStateFromProps (rarely used)
                        - When the state of the component depends on changes in props overtime
                        - set the state
                        - Do not cause side effects Ex: Http requests

        3. render
                        - Only require method
                        - Read prop & state and return JSX
                        - Do not change state or interact with DOM or make aajax calls
                        - Children components lifecycle methods are also executed

        4. componentDidMount
                        - Invoked immediately after a component and all its children components have rendered to the DOM
                        - Cause side effects. EX: Interact with DOM or perform any ajax calls to load data



    2. Updating Phase
        1. getDerivedStateFromProps (props, state) (rarely used)
                        - Method is called every time a component is re-rendered
                        - When the state of the component depends on changes in props overtime
                        - set the state
                        - Do not cause side effects Ex: Http requests

        2. shouldComponentUpdate (nextProps, nextState) (rarely used)
                        - Dictates if the component should re-render or not
                        - By default all class components will re-render whenever the props receive or their state changes
                        - Prevent the default behaviour by returning false.
                        - Compare the existing and next state props and values, and return a boolean value to let react know whether the component to update or not
                        - Suitable for Performance Optimization
                        - Do not cause side effects. Ex: http requests, calling the setState method

        3. render
                        - Only require method
                        - Read prop & state and return JSX
                        - Do not change state or interact with DOM or make aajax calls
                        - Children components lifecycle methods are also executed

        4. getSnapshotBeforeUpdate (prevProps, prevState) (rarely used)
                        - Called right before the changes from VIRTUAL DOM are to be reflected in the DOM
                        - Used to capture some information from th DOM. Ex: Used to read scroll position and after the update maintain the scroll position by performing some calculation
                        - Method will either return null or return a value. Returned valued will be passed as the third parameter to the next method

        5. componentDidUpdate (prevProps, prevState, snapshot)
                        - snapshot parameter here is the one which get it from getShanpshotBeforeUpdate hook
                        - called after the render is finished in the re-render cycles
                        - called only once
                        - Invoked immediately after a component and all its children components have rendered to the DOM
                        - Cause side effects. EX: Interact with DOM or perform any ajax calls to load data
                        - Before making ajax calls, compare the prevProps with the newProps, decide based on that. If you are not comparing, you are making unwanted calls which are not recommended.
                        - Suitable for ajax calls based on the previous and current props




    3. Unmounting Phase
        1. componentWillUnmount()
                        - Method is invoked immediately before a ccomponent is unmounted or destroyed
                        - Cancelling any network requests, removing event handlers, cancelling any subscriptiops and also invalidating timers
                        - Do not call the setState method

    4. Error Handling Phase
        1. static getDerivedStateFromError(error)
        2. componentDidCatch(error,info)

        Above will be called, When there is an error either during rendering in a lifecycle method or in the constructor of any child component


*/