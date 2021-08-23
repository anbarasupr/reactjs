import React from 'react';

export class ClassClick extends React.Component {
    clickHandler(event) {
        console.log('ClassClick Button clickHandler', event);
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        );
    }
}