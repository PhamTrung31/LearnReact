import React from 'react'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    }
  }

  getTime = () => {
    //previousState.time !=== newState.time
    //previousState.time.created !=== newState.time.created

    const newState = {
      ...this.state,
      time: { created: new Date().toLocaleTimeString() }
    }
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>It's {this.state.time.created}</h2>
        <h2>It's {this.state.seconds.created}</h2>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    )
  }
}
