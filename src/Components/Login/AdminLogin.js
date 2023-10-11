import React from 'react'

function AdminLogin() {
  return (
    <form className="form-wrapper">
                
                <div className="email">
                    <label className="label">Email</label>
                    <input className="input" placeholder="admin@gmail.com" type="email" name="email" 
                    />
                    
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    <input className="input" type="password" name="password"
                    />
                   
                </div>
               
                <div>
                    <button className="submit" >
                        Log In
                    </button>
                </div>
            </form>
  )
}

export default AdminLogin