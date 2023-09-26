import React, { useState } from 'react'
import Validation from './Validation';
import './SignUpHeader.css'

function SignUp() {
    const [values,setValues] = useState({
        name:"",
        email:"",
        password:"",
        repassword:""

    })

    const [errors,setErrors] = useState({});

    const handleChange = (event)=>{
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSumbit =(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
    }
  return (
    <div className="container">
        <div className="app-wrapper">
            <div>
                <h2 className="title">Create an account</h2>
            </div>
            <form className="form-wrapper">
                <div className="name">
                    <label className="label">Name</label>
                    <input className="input" placeholder="Jonh" type="text" name="name" 
                        value={values.name}
                        onChange={handleChange}
                        />
                    {errors.name && <p className="error">{errors.name}</p>}    
                </div>
                <div className="email">
                    <label className="label">Email</label>
                    <input className="input" placeholder="abc@gmail.com" type="email" name="email" 
                    value={values.email}
                    onChange={handleChange}/>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    <input className="input" type="password" name="password"
                    value={values.password}
                    onChange={handleChange}/>
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div className="password">
                    <label className="label">Re-enter Password</label>
                    <input className="input" type="password" name="repassword"
                    value={values.repassword}
                    onChange={handleChange}/>
                    {errors.repassword && <p className="error">{errors.repassword}</p>}
                </div>
                <div>
                    <button className="submit" onClick={handleFormSumbit}>
                        Sign Up
                    </button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default SignUp