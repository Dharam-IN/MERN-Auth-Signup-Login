import React from "react";
import './css/style.css'

const Registerpage = () => {
    return (
        <>
            <div className="card">
                <h2>Register Form</h2>
                <form>
                    <label for="fullname">Full Name</label>
                    <input type="text" id="fullname" placeholder="Enter your full name"/>

                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email"/>

                    <label for="new-password">New Password</label>
                    <input type="password" id="new-password" placeholder="Enter your new password"/>

                    <button type="submit">Register</button>
                </form>
                <div className="switch">Already have an account? <a href="/" onclick="switchCard()" >Login here</a></div>
            </div>
        </>
    );
}

export default Registerpage;