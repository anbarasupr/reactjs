import React, { Component } from 'react'

class ClickCounterTwo extends Component {
  // Without Render props
  /*constructor(props) {
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
  }*/

  // With Render props
  render() {
    const { count, incrementCount } = this.props
    return <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
  }
}

export default ClickCounterTwo


