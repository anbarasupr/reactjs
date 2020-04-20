import React from 'react';
import { Person } from './Person';

export const NameListIndex = () => {
    const names = ['Bruce', 'Clark', 'Diana', 'Mark'];
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>);

    return (
        <div>
            {
                nameList
            }
        </div>
    )
}


/*
    Index as key:
    Note * Try avoiding index as key.

    When to use index as a key?
    1. The items in a list do not have a unique id
    2. The list is a static list and will not change
    3. The list will never be reordered or filtered
*/