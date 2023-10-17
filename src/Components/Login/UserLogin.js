import Input from 'antd/es/input/Input'
import React,{  useState }  from 'react'
import { useNavigate } from 'react-router-dom'
import LoginServices from '../../Services/LoginServices'
function UserLogin() {
    const navigate = useNavigate()
    const [user,setUser]=useState([
        {
            
            p_email: "",
            p_password: ""
            
        }
    ])

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    } 


    const handlClick= (e)=>{
        e.preventDefault()
        
        
       LoginServices.getUser().then((res)=>{
        res.data.forEach(element => {
            if(element===user.p_password){
                navigate("/User")
            }
        });
        console.log(res.data)
       })
       
        
    
    }

  return (
    <form className="form-wrapper" onSubmit={handlClick}>
                
                <div className="email">
                    <label className="label">Email</label>
                    <input className="input" placeholder="abc@gmail.com" type="email" name="p_email" 
                    onChange={(e)=>handleChange(e)}
                    />
                    
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    {/* <input className="input" type="password" name="password"
                    /> */}
                   <Input.Password name="p_password" onChange={(e)=>handleChange(e)}/>
                </div>
               
                <div>
                    <button className="submit" type="submit">
                        Log In
                    </button>
                </div>
            </form>
  )
}

export default UserLogin