import React, { Component } from 'react'


class SignUp extends Component {
    constructor () {
        super ()
        this.state = {
            username: null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signup(this.state.username)
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
                <input type='submit' value='sign up' />
              </form>
            </div>
        );
    }
}

export default SignUp