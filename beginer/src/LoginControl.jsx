import React from 'react'

class LoginButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Login</button>
  }
}

class LogoutButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Logout</button>
  }
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoggedIn: false }
  }

  // render() {
  //   var button = <LoginButton />
  //   const { isLoggedIn } = this.props

  //   if (isLoggedIn) {
  //     button = <LogoutButton />
  //   }
  //   return <div className='login-control'>{button}</div>
  // }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    const { isLoggedIn } = this.state

    return (
      <div className='login-control'>
        {/* {isLoggedIn ? <LogoutButton /> : <LoginButton />} */}
        {isLoggedIn && <LogoutButton onClick={this.handleLogout} />}
        {!isLoggedIn && <LoginButton onClick={this.handleLogin} />}
      </div>
    )
  }
}

export default LoginControl
