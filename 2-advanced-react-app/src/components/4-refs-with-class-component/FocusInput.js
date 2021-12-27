import React, { Component } from 'react'
import Input from './Input';

export class FocusInput extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    clickHandler = () => {
        this.componentRef.current.focusInput();
    }

    render() {
        return (
            <div>
                <h2>Ref with Class Component</h2>
                <Input ref={this.componentRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default FocusInput


/* we  added ref to a class component here. 
* From the class component ref, we are focusing to the input which is in the Input component
* refs cannot be attached to functional component
*/