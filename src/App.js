import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import User from './components/User';


class App extends Component {

  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  login = (username) => {
    fetch(`http://localhost:3000/users/find_by_username?username=${username}`)
    .then(resp => resp.json())
    .then(userData => this.setState({
      currentUser: userData
    }))
  }

  logout = () => {
    this.setState({
      currentUser: null
    })
  }

  signup = (username) => {
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username: username
      })
    }

    fetch('http://localhost:3000/users', reqObj)
    .then(resp => resp.json())
    .then(userData => this.setState({
      currentUser: userData
    }))
  }

  render() {
    return (
      <div>
        <Navbar currentUser={this.state.currentUser} login={this.login} handleLogout={this.logout} signup={this.signup} />
        {this.state.currentUser ? <User currentUser={this.state.currentUser} /> : <Welcome/>}
      </div>
    )
  }
}

export default App;