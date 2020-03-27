import React, { Component } from 'react'

class Welcome extends Component {
    constructor () {
        super ()
        this.state = {
            username: 'user1'
        }
    }

    render () {
        return (
            <div>
                <h1>Welcome to Flatnote</h1>
                <h2>The world's #1 app to get your life together!</h2>
                <h2>Flatnote organizes your tasks into helpful categories so you can stay on top of things.</h2>
                <h2>Log In or Sign Up to start getting your life together.</h2>
            </div>
        )
    }
}

export default Welcome