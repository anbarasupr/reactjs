import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
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
    return (
      <div>
        {this.props.render(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

export default Counter


/**
 * Note : In react, it is possible to use a prop  whose value is a function to control what is actaully rendered by the component
 *
 * The term 'render-prop' refers to a technique for sharing code between react components using a Prop whose value is a function.
 *
 * Render-prop and higherOrder Component are useful for sharing a common code between react components
 *
 * The ClickCounterTwo and HoverCounterTwo have the count state and the incrementCount functionality.
 * Here Counter Component hold the count state and the incrementCount functionality of ClickCounterTwo and HoverCounterTwo
 *
 */
