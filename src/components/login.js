import React from "react";
import './css/style.css'

const Loginpage = () => {
    return (
        <>
            <div className="card">
                <h2>Login Form</h2>
                <form>
                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username"/>

                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password"/>

                    <button type="submit">Login</button>
                </form>
                <div className="switch">Don't have an account? <a href="/" onclick="switchCard()">Register here</a></div>
            </div>
        </>
    );
}

export default Loginpage;