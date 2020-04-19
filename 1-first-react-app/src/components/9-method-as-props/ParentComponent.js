import React from 'react';
import { ChildComponent } from './ChildComponent';

export class ParentComponent extends React.Component {
    constructor(props) {
        console.log('ParentComponent constructor props', props);
        super(props);
        this.state = {
            // parentName: 'Parent'
            parentName:props.componentName
        };

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName) {
        console.log('greetParent scope', this);
        console.log(`Hello ${this.state.parentName}, from ${childName}`);
        alert(`Hello ${this.state.parentName}, from ${childName}`);
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        );
    }
}