import React, { use, useEffect, useState } from 'react'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import {createstory, createstorysuzz , creteStoryfail , resetstorystatus  } from '../slices/storySlice'
function Socialstory() {
  
  const [imagea , setImage] = useState(null)
  const [storytext , setStorytext] = useState("")


  const dispatch = useDispatch()

  const handleimage = (e) =>{
  const file = e.target.files[0]

  if(!file) return;

  const render = new FileReader()
  render.onload =() =>{
    setImage (render.result)
render.readAsDataURL(file)

  }
  }
    const {success , error } = useSelector(state => state.story )

  useEffect(()=>{
    if (success) {
        alert("story created successfully!")

    setImage(null)
    storytext("")

        dispatch(resetstorystatus())
    }
    if (error) {
      alert("Error creating story!")
      dispatch(resetstorystatus())
    }
  })

  const handlesumbit = (eve) =>{
    eve.preventDefault();
    dispatch(createstory())
    const newstory = { 
      id: Date.now(),
      image : imagea,
      text: storytext,
      createdAt: new Date().toISOString()
    }
    dispatch((createstorysuzz(newstory)))

  }

  return (
    <div>

      <form  onSubmit={handlesumbit}>
        <div className='story-main'>
<div className='story-holder'
>
 <input type="file"  
 accept='image/*'
 onChange={handleimage}
 placeholder='Plaese add the story image here '/>
</div>

<div className='story-text'>
 <textarea 
 onChange={(e)=>setStorytext(e.target.value)}
  placeholder='Add your story text here...'
 ></textarea>
</div>

<div className='buttonas'>
 <Button 
  text= "Schedule Story"
 type='submit'
/>
</div>
        </div>
      </form>
    </div>
  )
}

export default Socialstory