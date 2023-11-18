import React, { useState } from "react";
import './css/style.css';
import axios from "axios";

const Registerpage = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    });

    const handleChange = e =>{
        const {name, value} = e.target
        // console.log(name, value)

        setUser({
            ...user,
            [name]: value
        })
    }

    const register = ()=>{
        const {name, email, password, reEnterPassword} = user;
        
        if(name && email && password && (password === reEnterPassword)){
            // alert("Posted")
            axios.post("http://localhost:9002/register", user)
            .then( res => console.log(res) )
        }else{
            alert("Invalid value")
        }
    }

    return (
        <>
        {console.log(user)}
            <div className="card">
                <h2>Register Form</h2>
                <form>
                    <div>
                        <label for="fullname">Full Name</label>
                        <input type="text" id="fullname" name="name" value={user.name} placeholder="Enter your full name" onChange={handleChange}/>
                    </div>

                    <div>
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" value={user.email} placeholder="Enter your email" onChange={handleChange}/>
                    </div>

                    <div>
                        <label for="new-password">Password</label>
                        <input type="password" id="new-password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}/>
                    </div>

                    <div>
                        <label for="retype-password">Reenter Password</label>
                        <input type="password" id="retype-password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Retype Password" onChange={handleChange}/>
                    </div>

                    <div className="button" onClick={register}>Register</div>
                </form>
                <div className="switch">Already have an account? <a href="/" onclick="switchCard()" >Login here</a></div>
            </div>
        </>
    );
}

export default Registerpage;