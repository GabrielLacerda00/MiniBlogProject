import React from "react";
import styles from "./Register.module.css";

import { useState, useEffect } from "react";

const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();

        setError("")

        const user = {
            displayName,
            email,
            password
        }

        if(password !== confirmPassword){
            setError("Passord not the same!")
        }


    }

    return(
        <div className={styles.register}>
            <h1>Register for posting</h1>
            <p>Create a user and share your history</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Name:</span>
                    <input 
                    type="text" 
                    name="displayname"
                    required
                    placeholder="User name"
                    value={displayName}
                    onChange={(e)=>setDisplayName(e.target.value)}
                    />
                </label>
                <label>
                    <span>Email:</span>
                    <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="User email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Password:</span>
                    <input 
                    type="password" 
                    name="password"
                    required
                    placeholder="User password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </label>
                <label>
                    <span>Confirm Password:</span>
                    <input 
                    type="password" 
                    name="confirm password"
                    required
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    />
                    <button className="btn">Register</button>
                    {error && <p className="error">{error}</p>}
                </label>
            </form>
        </div>
    )
}

export default Register;