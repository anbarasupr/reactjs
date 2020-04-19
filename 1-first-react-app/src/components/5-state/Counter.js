import React from 'react';

export class Counter extends React.Component {

    data = {};
    constructor() {
        super();
        this.state = {
            count: 0
        };
        console.log('Counter constructor', this.state.count);
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        // note if the call to the setState() is happened multiple times, then all the calls are grouped and the state will be set only one time for performance perspective
    }

    increment() {
        // this.state.count = this.state.count + 1; // this. wont work. need to call setState() to happen the change detection

        /*  console.log('Counter before increment', this.state.count);
         this.setState({
             count:this.state.count+1
         });
         console.log('Counter after increment', this.state.count); // we dont get latest value here even after the setState() has been called.
         // so do not do any execution with the intention of taking latest state after the setState() is called cause we dont get it. use callback instead of it.
     */

        // to get the latest state value, use callback in setState()
        /* this.setState({
            count: this.state.count + 1
        }, () => {
            // note this callback will be called 5 times after render() is called. render is called one time
            console.log('Counter after increment inside callback', this.state.count);
        }); */

        this.setState((prevState) => ({
            count: prevState.count + 1
        }), () => {
            // note this callback will be called after render() is called
            console.log('Counter after increment inside callback', this.state.count);
        });


        /* this.setState((prevState, props) => ({
            count: prevState.count + Number(props.addValue)
        })); */


    }

    render() {
        console.log('Message render', this.state);
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={() => this.increment()}>Increment</button> &nbsp;
                <button onClick={() => this.incrementFive()}>Increment  Five</button>
            </div>
        );
    }
}


/*
    Diff b/w props & state
    Props:
        1. props get passed to the component
        2. Function parameters
        3. props are immutable
        4. props - Functional Components, this.props - Class Components

    State:
        1. state is managed within the component
        2. Variables decalred in the function body
        3. state can be changed
        4. useSate Hook - Functional Components, this.state - Class Components

*/
