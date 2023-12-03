import React from "react";
import styles from "./Register.module.css";

import { useState, useEffect } from "react";

const Register = () => {
    return(
        <div >
            <h1>Register for posting</h1>
            <p>Create a user and share your history</p>
            <form>
                <label>
                    <span>Name:</span>
                    <input 
                    type="text" 
                    name="displayname"
                    required
                    placeholder="User name"/>
                </label>
                <label>
                    <span>Email:</span>
                    <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="User email"/>
                </label>
                <label>
                    <span>Password:</span>
                    <input 
                    type="password" 
                    name="password"
                    required
                    placeholder="User password"/>
                </label>
                <label>
                    <span>Confirm Password:</span>
                    <input 
                    type="password" 
                    name="confirm password"
                    required
                    placeholder="Confirm password"/>
                    <button className="btn">Register</button>
                </label>
            </form>
        </div>
    )
}

export default Register;