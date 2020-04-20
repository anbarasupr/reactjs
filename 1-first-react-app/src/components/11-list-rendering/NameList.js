import React from 'react';
import { Person } from './Person';

export const NameList = () => {
    const names = ['Bruce', 'Clark', 'Diana', 'Mark'];
    const nameList = names.map(name => <h2>{name}</h2>);

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 28,
            skill: 'Vue'
        },
        {
            id: 2,
            name: 'Clark',
            age: 22,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 34,
            skill: 'React'
        }
    ];
    /* const personsList = persons.map(person => (
        <h2>
            I am {person.name}, I am {person.age}, I know {person.skill}
        </h2>
    )); */

    // Recommended way - separate the person rendering into separate js
    /* 
        Below code give a warning in console.
        Warning: Each child in a list should have a unique "key" prop.
        REACT need key property in the list of elements for efficient rendering purpose.
     */
    // const personsList = persons.map(person => <Person person={person} />);

    /*
         To solve above warning.
         Also key is not accessible in child component and it is needed for react.
         If we want that, we can send as a another props.
    */
    const personsList = persons.map(person => <Person key={person.id} person={person} />);

    return (
        <div>
            {
                /* names.map(name => <h2>{name}</h2>) */
                nameList,
                personsList
            }
        </div>
    )
}



/* 
    Lis and Keys
    1. A key is a special attribute you need to include when creating lists of elements
    2. keys give the elements a stable identity
    3. Keys help React identify which items have changed, are added or are removed
    4. Help in efficient update of the user interface
*/