import React, { useState } from "react";
import './Register.css';

export const Register = (props) => {
    const [formdata, setFormdata] = useState({firstname: "", lastname:"",password:"",email:""  });
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormdata(prev =>{
            return{
                ...prev,
                [event.target.name] : event.target.value
               
            }
        }); 
      
    }

    return (
        <div classname="auth-form-container">
            <h2>create Account</h2>
        <form class
        name="register-form" >
           
            <label htmlFor="firstname">First Name</label>
            <input type="text" onChange={handleSubmit} value={formdata.firstname} name="firstname" id="firstname" placeholder="First Name" />

            <label htmlFor="lastname">Last Name</label>
            <input value={formdata.lastname}  onChange={handleSubmit} laststname="lastname" id="lastname" placeholder="Last Name" />

            <label htmlFor="email">email</label>
            <input value={formdata.email} onChange={handleSubmit} placeholder="youremail@gmail.com" id="email" name="email" />

            <label htmlFor="password">password</label>
            <input value={formdata.password} onChange={handleSubmit} type="password" placeholder="********" id="password" name="password" />

            <button type="submit">sign up</button>
        </form>
        <button classname="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}