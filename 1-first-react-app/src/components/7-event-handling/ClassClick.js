import React from 'react';

export class ClassClick extends React.Component {
    clickHandler(event) {
        console.log('Button clickHandler', event);
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        );
    }
}