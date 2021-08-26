import React, { Component } from 'react'

class ClassCounter extends Component {
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
