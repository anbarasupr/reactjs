import React from 'react';

export const Person = ({person}) => { 
    return (
        <div>
            <h2>
               !!! I am {person.name}, I am {person.age}, I know {person.skill}
            </h2>
        </div>
    )
}