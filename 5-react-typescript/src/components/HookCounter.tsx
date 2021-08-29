import React from 'react'
import { ICounterProps } from './ClassCounter';


const HookCounter: React.FC<any> = (props) => {
    const clickHandler = () => {
        console.log('HookCounter clickHandler', props);
    }

    console.log('HookCounter clickHandler  Render path param value', props.match.params.id);
    return (
        <div>
            <h2>Hook Counter</h2>
            <h3>Coupon : {props.myCoupon?.hookCounterCoupon || 0}</h3>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default HookCounter
