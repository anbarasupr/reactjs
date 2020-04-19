import React from 'react';

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
    const personsList = persons.map(person => (
        <h2>
            I am {person.name}, I am {person.age}, I know {person.skill}
        </h2>
    ));

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