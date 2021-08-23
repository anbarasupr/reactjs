import React from 'react'

function MemoComp({ name }) {

    console.log('MemoComp render');
    return (
        <div>
            {name}
        </div>
    )
}

// export default MemoComp
export default React.memo(MemoComp)
