import React from 'react'
import ParentComponent from './ParentComponent'
import ParentComponentWithCallback from './ParentComponentWithCallback'

function UseCallbackTest() {
    return (
        <div>
            {
                /*<div>
                    <h3>Without usecallback</h3>
                    <ParentComponent></ParentComponent>
                </div>*/
            }
            {
                <div>
                    <h3>With usecallback</h3>
                    <ParentComponentWithCallback></ParentComponentWithCallback>
                </div>
            }
        </div>
    )
}

export default UseCallbackTest

