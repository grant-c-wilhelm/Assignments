import React from 'react'
import Form from './Form'

function Home() {
    return (
        <div className="home">
            <div className="sign-up-text">
                Sign up <a className="login-question">Login?</a>
            </div>
            <div className="form-positioning">
                <Form />
            </div>
        </div>
    )
}

export default Home
