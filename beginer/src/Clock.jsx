import React from 'react'

const lists = ['BMW', 'Toyota', 'Honda']

const fetchApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lists)
    }, 1000)
  })
}
export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      },
      lists: [],
      darkMode: false
    }
  }

  componentDidUpdate() {
    if (this.state.darkMode) {
      const value = document.querySelector('input').value
      console.log('Value in Input: ', value)
    }

    if (this.state.lists.length === 0) {
      fetchApi().then((res) =>
        this.setState((prevState) => ({
          ...prevState,
          lists: res
        }))
      )
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

  componentDidMount() {
    const seconds = document.getElementById('seconds')
    console.log(seconds)

    fetchApi().then((res) =>
      this.setState((prevState) => ({
        ...prevState,
        lists: res
      }))
    )
  }

  toggelDarkMode = () => {
    this.setState((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode
    }))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>It's {this.state.time.created}</h2>
        <h2 id='seconds'>It's {this.state.seconds.created}</h2>
        <button onClick={this.getTime}>Get Time</button>
        <button onClick={this.toggelDarkMode}>Toggle</button>
        {this.state.darkMode && <input value={this.state.darkMode} type='text' />}
      </div>
    )
  }
}
