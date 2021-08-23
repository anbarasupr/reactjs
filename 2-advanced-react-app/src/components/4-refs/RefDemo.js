import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();

        // callback ref approach
        this.cbRef = null;
        this.setCbRef = element => this.cbRef = element; // set using callback method
    }

    componentDidMount() {
        console.log('RefDemo componentDidMount inputRef', this.inputRef);
        this.inputRef.current.focus();
        // this.cbRef.focus();
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }

    clickCbHandler = () => {
        alert(this.cbRef.value);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h2>Ref Demo</h2>
                    <label>Ref</label><input type='text' ref={this.inputRef} />
                    <button onClick={this.clickHandler}>Click</button>
                </div>
                <div>
                    <h2>Callback Ref Demo</h2>
                    <label>Callback Ref</label><input type='text' ref={this.setCbRef} />
                    <button onClick={this.clickCbHandler}>Click</button>
                </div>
            </React.Fragment>
        )
    }
}

export default RefDemo


// refs used to access the dom properties to manipulate