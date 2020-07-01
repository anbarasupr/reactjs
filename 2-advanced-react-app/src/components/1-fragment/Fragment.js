import React from 'react';

export class FragmentDemo extends React.Component {
    render() {
        return (
            /*
            <div>
                 <h1>
                     Fragment Demo
             </h1>
                 <p>This describe the Fragment Demo Component</p>
             </div> 
             */

            <React.Fragment>
                <h1>
                    Fragment Demo
                </h1>
                <p>This describe the Fragment Demo Component</p>
            </React.Fragment>
        );
    }
}

/*
    Fragments
    Lets you group list of childrens without adding extra nodes to the DOM.
*/



export function Table() {
    return (
        <table border="1">
            <tbody>
                <tr>
                    <Columns />
                </tr>
            </tbody>
        </table>
    );
}


function Columns() {
    return (
        /*  <React.Fragment>
             <td>Anbu</td>
             <td>Arasu</td>
         </React.Fragment> */

        /* Short hand syntax for fragment but we cannot use key attribute */
        <>
            <td>Anbu</td>
            <td>Arasu</td>
        </>
    );
}


export function FragmentDemo1() {
    const items = [
        {
            title: 'Fragment Title',
            content: 'Grouping of children nodes'
        }
    ];
    return (
        <React.Fragment>
            {
                items.map(item => (
                    <React.Fragment key={item.title}>
                        <h1>{item.title}</h1>
                        <p>{item.content}</p>
                    </React.Fragment>
                ))
            }
        </React.Fragment>
    );
}