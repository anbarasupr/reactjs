import React from 'react';

export class Message extends React.Component {

    data = {};
    constructor() { // props cannot be accessed in constructor and accessible only in render
        super();
        this.state = {
            message: 'Click the subscription to get notification'
        };
        console.log('Message constructor', this.props, this.data); // props undefined here
    }

    changeMessage() {
        this.data.name = this.data.name + ' Test';
        this.setState({ message: 'Thank you for subscribing' });
        // this.state.message='Thank you for subscribing !!!'; // this. wont work. need to call setState() to happen the change detection
        this.data.name = this.data.name + ' !!'; // this also wont work. we cannot maintain the state to influence the UI using component level global variables and it doesnt take effect. we have to go for react state.
        console.log('Message changeMessage', this.props, this.data);
    }

    render() {
        console.log('Message render', this.props);
        this.data.name = this.props.name;
        return (
            <div>
                <h1>Welcome, {this.data.name}</h1>
                <h2>{this.state.message}</h2>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
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
