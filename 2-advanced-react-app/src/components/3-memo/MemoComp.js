import React from 'react'

function MemoComp(props) {

    console.log('MemoComp render', props);
    return (
        <div>
            {props.name}
        </div>
    )
}

// export default MemoComp
export default React.memo(MemoComp)


// PureComponent is for class component and React.memo Component which is a Pure component for Functional Component
