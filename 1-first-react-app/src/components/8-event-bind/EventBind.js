import React from 'react';

export class EventBind extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello'
        };
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event) {
        console.log('Button clickHandler', event, this);
        this.setState({
            message: 'Goodbye'
        });
    }

    clickMeTooHandler(event) {
        console.log('Button clickMeTooHandler', event, this);
        this.setState({
            message: 'Goodbye'
        });
    }

    clickMeHandler(event) {
        console.log('Button clickMeHandler', event, this);
        this.setState({
            message: 'Goodbye'
        });
    }

    arrowFunctionClickHandler = (event) => {
        console.log('Button arrowFunctionClickHandler', event, this);
        this.setState({
            message: 'Goodbye'
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                {
                    /* Approach 1: clickHandler() doesnt have access to this  */
                    <button onClick={this.clickMeHandler}>Click me 1</button>
                }
                {
                    /* Approach 2: clickHandler() have access to this, since this is binded to the handler */
                     <button onClick={this.clickHandler.bind(this)}>Click me 2</button> 
                }
                {
                    /* Approach 3: arrow function approach - clickHandler() have access to this here  */
                     <button onClick={(evt)=>this.clickMeTooHandler(evt)}>Click me 3</button> 
                }

                {/* All the above approaches are not good, because when the state change happen, render will be called and the event bindings are created as many time when the state changes */}


                {
                    /* Recommended approches in Class constructor and class level arrow funcion handler */
                    <div>
                        <button onClick={this.clickHandler}>Click me</button>
                        <button onClick={this.arrowFunctionClickHandler}>Click me</button>
                    </div>
                }

            </div>
        );
    }
}