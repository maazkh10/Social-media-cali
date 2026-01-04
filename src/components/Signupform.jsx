import React, { useState } from 'react'
import Button from './Button'
import { supabase } from '../supabase/client'
function Signupform() {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [username, setUserName] = useState("")
    const [avatar, setAvatar] = useState("")
    const [insta, setInsta] = useState("")
    const [twiter, setTwiter] = useState("")
    const [Linkendin, setLinedin] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)


    const handlesubm = async (e) =>{
       e.preventDefault(); // stops page refresh
  console.log("Form submitted");
   setLoading(true);

   const {data , error} = await supabase.auth.signUp({
    email,
    password
   })
   if (error) {
    alert(error)
    setLoading(false)
    return
   }

   const user = data.user

const {error : profileError} = await supabase
.from('profile')
.insert({
    user_id : user.id,
    name,
    email,
    username,
    avatar_url : avatar,
    insta,
    twiter,
    Linkendin
})
if (profileError) {
    alert(profileError)
}else{
    alert("account create successfull")
}

setLoading(false)
    }

  return (
    <div>
        <form onSubmit={handlesubm} >
<input 
value={name}
onChange={(e)=> setName(e.target.value)} required
type="text" placeholder='Please add ur name' />
<input type="email" 
value={email}
onChange={(e)=> setEmail(e.target.value)} required
placeholder='Please Enter Your Email' />
<input type="text" 
value={username}
onChange={(e)=> setUserName(e.target.value)}
placeholder='Username u would like to add' />


<input type="file" accept="image/*" 

onChange={(e)=> setAvatar(e.target.files[0]?.name)}
/>


<input type="url"
value={insta}
onChange={(e)=> setInsta(e.target.value)}
placeholder='Instagram Url u would like to add' />
<input type="url" placeholder='Twitter'
value={twiter}
onChange={(e)=> setTwiter(e.target.value)}
/>
<input type="url" 
value={Linkendin}
onChange={(e)=> setLinedin(e.target.value)}
placeholder='Linkind' />
<input type="password" 
value={password}
onChange={(e)=> setPassword(e.target.value)}
placeholder='Plase assine one password' />
        
        <Button text={loading ? "Creating Account..." : "signup"} disabled={loading} type='submit' />
      {/* <Button text={loading ? 'Creating account...' : 'Sign Up'}  /> */}
        </form>
    </div>
  )
}

export default Signupform