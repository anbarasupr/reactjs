import React from 'react';

export class LifecycleB extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Anbu'
        };
        console.log('LifecycleB constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps');
        return null;
    }

    render() {
        console.log('LifecycleB render');

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
    shouldComponentUpdate (nextProps, nextState){
        console.log('LifecycleB shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate (prevProps, prevState, snapshot){
        console.log('LifecycleB componentDidUpdate');
    }
}