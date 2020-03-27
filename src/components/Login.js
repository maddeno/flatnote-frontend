import React, { Component } from 'react'


class Login extends Component {
    constructor () {
        super ()
        this.state = {
            username: null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state.username)
        this.props.hideForm()
    }

    handleChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render () {
        return (
            <div>
              <form onSubmit={ this.handleSubmit }>
                <input name={'username'} onChange={this.handleChange}/>
                <input type='submit' value='login' />
              </form>
            </div>
        );
    }
}

export default Login