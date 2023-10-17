import React, { useState } from 'react'
import Validation from './Validation';
import './SignUpHeader.css'
import RegistrationSevices from '../../Services/RegistrationSevices';
import { Input } from 'antd';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate =useNavigate();
    const [values,setValues] = useState({
        p_name:"",
        p_email:"",
        p_password:"",
        repassword:""

    })

    const [errors,setErrors] = useState({});

    const handleChange = (event)=>{
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }
    const handleClick=(e)=>{
        e.preventDefault()
        setErrors(Validation(values));
        if(Object.keys(errors).length === 0){
        RegistrationSevices.registor(values).then(res=>console.log(res))
        .catch(err=>console.log(err))
        navigate("/Login")
         }
    }
   
    
  return (
    <div className="container">
        <div className="app-wrapper">
            <div>
                <h2 className="title">Create an account</h2>
            </div>
            <form className="form-wrapper" onSubmit={handleClick}>
                <div className="name">
                    <label className="label">Name</label>
                    <input className="input" placeholder="Jonh" type="text" name="p_name" 
                        
                        onChange={handleChange}
                        />
                    {errors.name && <p className="error">{errors.name}</p>}    
                </div>
                <div className="email">
                    <label className="label">Email</label>
                    <input className="input" placeholder="abc@gmail.com" type="email" name="p_email" 
                    
                    onChange={handleChange}/>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    <Input.Password className="input" type="password" name="p_password"
                    
                    onChange={handleChange}/>
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div className="password">
                    <label className="label">Re-enter Password</label>
                    <Input.Password className="input" type="password" name="repassword"
                    
                    onChange={handleChange}/>
                    {errors.repassword && <p className="error">{errors.repassword}</p>}
                </div>
                <div>
                    <button className="submit" type="submit">
                        Sign Up
                    </button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default SignUp