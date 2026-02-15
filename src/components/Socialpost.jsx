import React, { useEffect, useState } from 'react'
import image from '../assets/image.png'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { createpost , createpostsuzz , resetstatus} from '../slices/postSlice'
function Socialpost() {
    const [imagea , setImage] = useState(null)
    const [caption , setCaption] = useState("")
    const [suggestion , setSuggestion] = useState("")
    const [date , setDate] = useState("")
    const [time , setTime] = useState("")   
    const dispatch = useDispatch()
    const {success , error } = useSelector(state => state.post)
    useEffect(()=>{
        if (success) {
            alert("Post created successfully!")
         dispatch(resetstatus())
        }
        if (error) {
            alert("Error creating post!")   
            dispatch(resetstatus())
        }
    })


    const hndleimg = (e) =>{
        const file = e.target.files[0]
        if (!file) return;

        const reader = new FileReader()
        reader.onload = () =>{
            setImage(reader.result)
        }
        reader.readAsDataURL(file)
    }
 
    const handlepostsumbbit = (eve) =>{
        eve.preventDefault();
        dispatch(createpost())
        const newpost = {
            id: Date.now(),
            image: imagea,
            text: caption,
            sugtext : suggestion,
            date,
               time,
            createAt : new Date().toISOString()
        }
        dispatch(createpostsuzz(newpost))
    }

    return (
    <div className='create-post'>

<form   onSubmit={handlepostsumbbit}>
        {/* image area  */}
            <div className='creat-img' 
            // onClick={()}
            >
            <label >
<input type="file" 
 accept='image/*'
 onChange={hndleimg}
/>
            </label>
            
        </div>

        {/* captin area */}

<div className='caption'>
    <textarea
     onChange={(e) => setCaption(e.target.value)}
    placeholder='Write a caption...' ></textarea>
</div>

<div className='suggtion'>
    <textarea onChange={(e)=> setSuggestion(e.target.value)} placeholder='add something as suggestion as song or some if u would liek to add '></textarea>
</div>

{/* calender and date picker  */}
<div className='date-btn'>
<div className="calendar">
  {/* <label>Date</label> */}
  <input type="date" 
  onChange={(e)=> setDate(e.target.value)} />

  {/* <label>Time</label> */}
  <input type="time" 
  onChange={(e)=> setTime(e.target.value)}
  />
</div>
<div className='buttonss'>

 <Button  text=  "Schedule Post"
// disable={loading}
      type='submit'
     />

</div>

</div>

</form>
    </div>
  )
}
export default Socialpost