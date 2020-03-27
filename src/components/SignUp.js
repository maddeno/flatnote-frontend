import React, { Component } from 'react'


class SignUp extends Component {
    constructor () {
        super ()
        this.state = {
            username: null
        }
    }

    render () {
        return (
            <div>
              <form >
                <input name={'username'} onChange={this.handleInputChange} value={this.state.username} />
                <input type='submit' value='sign up' />
              </form>
            </div>
        );
    }
}

export default SignUp