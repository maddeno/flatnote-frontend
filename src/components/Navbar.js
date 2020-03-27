import React from 'react';
import Login from './Login.js'
import SignUp from './SignUp.js'


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentUser: this.props.currentUser,
        showLogin: false,
        showSignUp: false
    }
  }

  renderLoginForm = () => {
    this.setState({
        showLogin: !this.state.showLogin
    })
  }

  renderSignUpForm = () => {
      this.setState({
          showSignUp: !this.state.showSignUp    
      })
  }

  handleLogout = () => {

  }

  render() {
    return (
      <div className={`ui inverted blue menu`}>
        <div className="center menu">
            {this.state.currentUser ? 
                <div className="item">
                    <button>Logout</button>
                </div>:
                <div className="item">
                    <button onClick={this.renderLoginForm}>Login</button>
                    <button onClick={this.renderSignUpForm}>Sign Up</button>
                </div>
            }
            {this.state.showLogin ? <Login login={this.props.login} /> : null}
            {this.state.showSignUp ? <SignUp/> : null}
        </div>
      </div>
    );
  }
}


export default Navbar;