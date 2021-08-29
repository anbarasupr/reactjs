import React from 'react';
import AddToList from './AddToList';
import List, { IProps } from './List';

const Party: React.FC<IProps> = ({ people, setPeople }) => {
    return <div>
        <h2>Let Party</h2>
        <h1>People Invited to my Party</h1>
        <List people={people} />
        <AddToList setPeople={setPeople} people={people} />
    </div>;
}

export default Party;
