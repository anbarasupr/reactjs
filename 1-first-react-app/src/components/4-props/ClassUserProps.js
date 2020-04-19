import React from 'react';


function formatName(props) {
    return props.firstName + ' ' + props.lastName;
}

export class ClassUserProps extends React.Component {

    render() {
        console.log('ClassUserProps props', this.props);
        return (
            <div>
                <h1>
                    Hello, {formatName(this.props)}!
            </h1>
                <h2> My Hero : {this.props.heroName}</h2>
                {this.props.children}
            </div>
        );
    }
}