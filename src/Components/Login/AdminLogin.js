import Input from 'antd/es/input/Input'
import React, {  useState } from 'react'
import LoginServices from '../../Services/LoginServices'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
    const navigate = useNavigate()
   
    const [admin,setAdmin]=useState([
        {
            
            mg_email: "",
            mg_password: ""
            
        }
    ])
    
    const handleChange = (e)=>{
        const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
    } 
    
    
    const handlClick=async (e)=>{
        e.preventDefault()
        
        
      LoginServices.getAdmin().then((res) => {
           if(res.data[0] === admin.mg_password){
            navigate("/Admin")
            
           } 
           console.log(res.data)
            console.log(admin.mg_email)
        })
    }

    
    
  return (
    <div>
    
    <form className="form-wrapper" onSubmit={handlClick}>
                
                <div className="email">
                    <label className="label">Email</label>
                    <input className="input" placeholder="admin@gmail.com" type="email" name="mg_email" 
                    onChange={(e)=>handleChange(e)}
                    />
                    
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    {/* <input className="input" type="password" name="password"
                    /> */}
                    <Input.Password name="mg_password" onChange={(e)=>handleChange(e)}/>
                   
                </div>
               
                <div>
                    <button className="submit" type="submit" >
                        Log In
                    </button>
                </div>
            </form>
            
            </div>
  )
}

export default AdminLogin