import React, { useState } from "react";
import './css/style.css'

const Loginpage = () => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = e =>{
        const {name, value} = e.target

        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <>
        {console.log(user)}
            <div className="card">
                <h2>Login Form</h2>
                <form>
                    <div>
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" value={user.username} placeholder="Enter your username" onChange={handleChange}/>
                    </div>

                    <div>
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}/>
                    </div>

                    <button type="submit">Login</button>
                </form>
                <div className="switch">Don't have an account? <a href="/" onclick="switchCard()">Register here</a></div>
            </div>
        </>
    );
}

export default Loginpage;