import React from 'react'

export default function User(props) {
    return (
        <div>
            {props.render(true)}
        </div>
    )
}


/**
 * Note : In react, it is possible to use a prop  whose value is a function to control what is actaully rendered by the component
 * 
 * The term 'render-prop' refers to a technique for sharing code between react components using a Prop whose value is a function.
 * 
 * Render-prop and higherOrder Component are useful for sharing a common code between react components
 * 
 */