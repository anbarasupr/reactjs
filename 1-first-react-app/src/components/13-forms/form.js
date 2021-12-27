import React from 'react';

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'anbu',
            comments: 'Sample Comment',
            topic: 'angular'
        };
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        });
    }

    handleTopicChange = (event) => {
        console.log('handleTopicChange topic', this.state);
        this.setState({
            topic: event.target.value
        });
    }

    handleSubmit = (event) => {
        console.log('submit', this.state);
        event.preventDefault(); // to avoid refresh
    }

    render() {
        const { username, comments, topic } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label> Username</label>
                        <input type='text' value={username} onChange={this.handleUsernameChange} />
                    </div>
                    <div>
                        <label> Comments</label>
                        <input type='text' value={comments} onChange={this.handleCommentsChange} />
                    </div>

                    <div>
                        <label> Topic</label>
                        <select value={topic} onChange={this.handleTopicChange}>
                            <option value='react'>React</option>
                            <option value='angular'>Angular</option>
                            <option value='vue'>Vue</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <p>{JSON.stringify(this.state)}</p>
            </div>
        );
    }
}