import React from 'react'
import Button from './Button'
import { useState } from 'react';
import { supabase } from '../supabase/client';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [ email , setEmail] = useState("")
  const [ password, setPassword] = useState("")
  const [ loading, setLoading] = useState("")
  const navigate = useNavigate() 
  const  submitlog = async (e) =>{
       e.preventDefault();
       setLoading(true)

       const {error} = await supabase.auth.signInWithPassword({
        email,
        password
       }) 

       if (error) {
        alert(error)
       }else{
        alert("login successfulll")
        navigate("/dashboard")
       }
       setLoading(false)
  }
  return (
    <div>
        <form onSubmit={submitlog}>

          <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="email" placeholder='Please add ur email' />
        
        <input
         value={password}
          onChange={(e)=>setPassword(e.target.value)}
        type="password" placeholder='Password here ' />
     <Button  text={loading ? "Logging inn ....": "Login plse"}
disable={loading}
      type='submit'
     />
        </form>
    </div>
  )
}

export default LoginForm