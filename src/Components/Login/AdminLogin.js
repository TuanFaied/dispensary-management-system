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
    const [post,setPost]=useState([
        {
            
            email: "",
            password: ""
            
        }
    ])
    const handleChange = (e)=>{
        const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
    } 
    
    
    const handlClick=(e)=>{
        e.preventDefault()
        

        LoginServices.getAdmin().then((res) => {
            
          setPost(res.data)})
        
          if(post.email === admin.mg_email && post.password === admin.mg_password ){
            navigate("/Admin")
          }
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