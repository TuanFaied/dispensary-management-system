import Input from 'antd/es/input/Input'
import React,{  useState }  from 'react'
import { useNavigate } from 'react-router-dom'
import LoginServices from '../../Services/LoginServices'
import useUserStore from '../store/useStore'
import { Alert } from 'antd';
function UserLogin() {
    const nav = new useNavigate()
    const [user,setUser]=useState([
        {           
            p_email: "",
            p_password: ""           
        }
    ])

    const setUserInfo = useUserStore(state => state.setUserInfo)

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    } 
    const [showAlert, setShowAlert] = useState(false);

    const handlClick= (e)=>{
        e.preventDefault()
        const GET_LOGIN_USER_URL=`http://localhost:8081//User/${user.p_email}`
        
       LoginServices.getUser(GET_LOGIN_USER_URL).then((res)=>{
        console.log(res.data)
             if(res.data[0].p_password===user.p_password){
                setUserInfo(res.data[0])
                 nav("/User/*", {state: { userData : res.data}})
             }
             else{
                setShowAlert(true);
                 
             }
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
                    
                   <Input.Password name="p_password" onChange={(e)=>handleChange(e)}/>
                </div>
               
                <div>
                    <button className="submit" type="submit">
                        Log In
                    </button>
                </div>
                {showAlert && ( 
                <Alert
                    type="error"
                    message="Incorrect email or password"
                    banner
                    closable 
                    onClose={() => setShowAlert(false)} 
                />)}
            </form>
  )
}

export default UserLogin