import React from 'react';

export class DestructuredWelcome extends React.Component {
    render() {
        console.log(this.props);
        const { firstName, lastName } = this.props;
        // const {state1,state2} this.state;
        return (
            <div>
                <h1>
                    Hello {firstName}, {lastName}
                </h1>
            </div>
        );
    }
}