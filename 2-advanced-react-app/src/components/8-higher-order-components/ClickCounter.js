import React, { Component } from 'react'
import withCounter from './withCounter'
import UpdatedComponent from './UpdatedComponent'

class ClickCounter extends Component {
  // Without HOC
  /* constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  render() {
    const { count } = this.state;
    return <button onClick={this.incrementCount}>{this.props.name} Clicked {count} times</button>
  } */

  // With HOC
  render() {
    const { count, incrementCount } = this.props
    return <button onClick={incrementCount}> {this.props.name} Clicked {count} times</button>
  }
}
// Without HOC
// export default ClickCounter;
// export default UpdatedComponent(ClickCounter)

// With HOC
export default withCounter(ClickCounter, 5)
