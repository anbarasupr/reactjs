import React from 'react';

export const SnippetF = () => {
    return (
        <div>

        </div>
    )
}


export class SnippetC extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
            parentName: 'Parent'
        };

        this.greetParent = this.greetParent.bind(this);
    }
	
    render() {
        return (
            <div>

            </div>
        );
    }
}