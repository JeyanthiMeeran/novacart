import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';



export default function Signup(){
    const[name, setName] =useState()
    const[email, setEmail] =useState()
    const[password, setPassword] =useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preveDefault()
        axios.post('mongodb://localhost:27017/user', {name, email, password})
        .then(result => {console.log(result)
        navigate('/home')
        })
        .catch(err => console.log)
    }



    return <div class="container">
                <div class="form-box">
                <h2>Nova Cart</h2>
                <p class="subtitle">Create your account to shop more</p>

                <form action="#" method="POST">
                    <div class="input-group">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" required/>
                    </div>

                    <div class="input-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" required/>
                    </div>

                    <div class="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="Create a password" required/>
                    </div>

                    <Link to={"/home"} type="submit" class="btn">Sign Up</Link>

                    <p class="switch">
                    Already have an account? <Link to={"/login"}>Login</Link>
                    </p>
                </form>
                </div>
            </div>
}