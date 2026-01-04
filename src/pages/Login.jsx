import React, { useState } from 'react'
import Instagram from '../assets/instagram.png'
import Button from '../components/Button'
import Signupform from '../components/Signupform'
import LoginForm from '../components/LoginForm'

function Login() {

const [ Sign , setSign] = useState(false)

    return (
    <div className="log-container">
      
      {/* LEFT SECTION */}
      <div className="log-left">
       
      </div>

      {/* RIGHT SECTION */}
      <div className="log-right">
        
        <div className="auth-card">
             <div className="icon">
          <img src={Instagram} alt="logo" />
          <div className="icon-content">
            <h3>Socials</h3>
            <p>Manage and schedule your content easily</p>
          </div>
        </div>
        
      <h3>{Sign ? "Create Account" : "Welcome back"}</h3>
        <p className='sub-text'>{Sign ? "Start managing your social media" : "Pls login with ur email"}</p>
         

         {/* form toggle  */}
         {Sign ? <Signupform />  : <LoginForm />}

         {/* switch case  */}
         <p className='switch-one'>
{Sign ? (
    <>
    Alredy have the account {""}
    <span 
    onClick={() => setSign(false)}
    style={{color: "red",cursor: "pointer"}}>Login</span>
    </>
): <>
    Dont have the account  {""}
    <span 
    onClick={() => setSign(true)}
    style={{color: "red" , cursor: "pointer"}}>Sign Up</span>
    </>}
         </p>
        </div>
      </div>

    </div>
  )
}

export default Login
