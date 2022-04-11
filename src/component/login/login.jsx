import React from 'react'
import './login.css'
import { Link } from "react-router-dom";


const Login = () => {

return(
    <div className="login">
      <div className="login-header">
        {/* <div className="logo-img">
        </div> */}
        EMS
      </div>
      <div className="login-content">
        <div className="login-content-header">Login</div>
        <div className="login-content-input">
          <label className="login-label">Username</label>
          <input className="login-input" type="text" placeholder="Enter Email" />
          <label className="login-label">Password</label>
          <input className="login-input" type="password" placeholder="Enter Password" />
          <button className="login-submit">Submit</button>
        </div>
        <div className="login-link">Not Registered ? <span>
        <Link to="/register">Register</Link>
</span> Here </div>
     </div>  
    </div>
)
}

export default Login