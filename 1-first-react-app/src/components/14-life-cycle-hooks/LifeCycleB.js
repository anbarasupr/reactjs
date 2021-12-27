import React from 'react';

export class LifecycleB extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Inital State B'
        };
        console.log('LifecycleB constructor', props);
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps', props, state);        
        return null;
    }

    render() {
        console.log('LifecycleB render', this.props, this.state);

        return (
            <div>
                <p> Lifecycle B</p>
            </div>
        );
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount');
    }

    // Updating Phase
    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifecycleB shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate', prevProps, prevState);
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifecycleB componentDidUpdate', prevProps, prevState, snapshot);
    }

    // Unmounting phase
    componentWillUnmount() {
        console.log('LifecycleB componentWillUnmount');
    }

    // Error Handling phase
}