import React from 'react'

const fetchComments = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(['A', 'B', 'C']), 1000)
  })

export default class CorrectlyState extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      comments: []
    }
  }

  componentDidMount() {
    //count will not = 2
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })

    //count will = 2
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))

    //class component co tinh nang merge state
    fetchComments().then((res) => {
      this.setState({
        comments: res
      })
    })
  }

  render() {
    console.log(this.state)
    return <div>CorrectlyState. Count: {this.state.count}</div>
  }
}
