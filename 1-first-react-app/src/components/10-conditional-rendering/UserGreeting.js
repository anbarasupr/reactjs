import React from 'react';

export class UserGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        };

    }

    render() {
        // if else condition approach
        /*  if (this.state.isLoggedIn) {
             return <div>Welcome, User</div>
         } else {
             return <div>Welcome, Guest</div>
         } */

        // element variable approach
        /* let message;
        if (this.state.isLoggedIn) {
            message = <div>Welcome, User</div>
        } else {
            message = <div>Welcome, Guest</div>
        }
        return message; */

        // ternary conditional approach
        /* return (
            this.state.isLoggedIn ?
                <div>Welcome, User</div> :
                <div>Welcome, Guest</div>
        ) */

        /* return this.state.isLoggedIn ? (
            <div>Welcome, User</div>
        ) : (
                <div>Welcome, Guest</div>
            ) */

        // using ternary operator, render something else not
        /* If left hand condition is false, the right side never executes or vice versa */
        return this.state.isLoggedIn && <div>Welcome, User</div>;

    }
}