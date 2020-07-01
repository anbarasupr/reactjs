import React, { PureComponent } from 'react';

export class PureComp extends PureComponent {
    render() {
        console.log('PureComp', this.props);
        return (
            <div>
                Pure Component  {this.props.name}
            </div>
        );
    }
}

export class RegularComp extends React.Component {
    render() {
        console.log('RegularComp', this.props);
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
            name: 'Parent'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: 'Parent Modified',
                id: this.state.id + 1
            });
        }, 2000)
    }

    render() {
        return (
            <div>
                Parent Component {this.state.name}
                <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>

        );
    }
}