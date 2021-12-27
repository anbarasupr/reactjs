import React, { PureComponent } from 'react';
import MemoComp from '../3-memo/MemoComp';

export class PureComp extends PureComponent {
    render() {
        console.log('PureComp render', this.props);
        return (
            <div>
                Pure Component  {this.props.name}
            </div>
        );
    }
}

export class RegularComp extends React.Component {
    render() {
        console.log('RegularComp render', this.props);
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        );
    }
}

export class ParentComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Parent',
            id: 1
        };
    }

    componentDidMount() {
        console.log('ParentComp componentDidMount', this.state);
        setInterval(() => {
            this.setState({
                name: 'Parent',
                id: this.state.id + 1
            });
        }, 2000)
    }

    render() {
        console.log('ParentComp render', this.state);
        return (
            <div>
                Parent Component {this.state.name}
                <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} /> 
                <MemoComp name = 'Memo Component which is a Pure component for Functional Component'/>
                <MemoComp name={this.state.name}/>
                {/* <RegularComp {...this.state} />
                <PureComp {...this.state} /> 
                <MemoComp {...this.state}/> */}
            </div>
        );
    }
}


/*
Summary:
-------
We can create a component by extending the PureComponent class.

A PureComponent implements the shouldComponentUpdate lifecycle method by performing a shallow comparision on the props and state
of the component.

If there is no differece, the component is not re-rendered which is a performance boost.

It is a good idea to ensure that all the children components are also pure to avoid unexpected behaviour.



Shallow Comparision (SC):
-----------------------
1. Primitive Types:
    a (SC) b returns true if a and b have the same value and are of the same type
    EX: string 'Vishwas' (SC) string 'Vishwas' return true


2. Complex Types:
    a (SC) b returns true if a and b reference the exact same object.

    // Array
    var a = [1, 2, 3];
    var b = [1, 2, 3];
    var c = a;

    var ab_eq = (a==b); // false
    var ac_eq = (a==c); // true


    // Object
    var a = {x : 1, y: 2};
    var b = {x : 1, y: 2};
    var c = a;

    var ab_eq = (a==b); // false
    var ac_eq = (a==c); // true

*/
