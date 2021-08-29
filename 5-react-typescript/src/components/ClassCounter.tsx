import React, { Component } from 'react'
import { ICounterState  as CounterProps} from './Topics';

export interface ICounterProps {
    myCoupon: CounterProps
    /* myCoupon: {
        classCounterCoupon: number,
        hookCounterCoupon: number
    } */
}

class ClassCounter extends Component<ICounterProps> {
    clickHandler = () => {
        console.log('ClassCounter clickHandler props', this.props);
    }

    render() {
        return (
            <div>
                <h2>Class Counter</h2>
                <h3>Coupon : {this.props.myCoupon?.classCounterCoupon || 0}</h3>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default ClassCounter
