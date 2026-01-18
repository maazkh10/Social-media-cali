import React, { useState } from 'react'
import './createshedule.css';
import Socialpost from './Socialpost';
import Socialstory from './Socialstory';
function CreateSchedule() {
  const [activetab , setActivetab] = useState('story');

  
  return (
    <div>
<h3>Create Scedule</h3>
<div>
  <div>
  userName 
</div>

{/* socialmedia  */}
<div></div>

</div>
{/* tabs for post and story  */}
<div className='tab-main' 
>
  {/* post tab */}
  <div className={activetab === "post" ? 'tab active' : 'tab'}
   onClick={()=> setActivetab("post")}
  >
    <h3>Post</h3>
  </div>
  {/* story tab  */}
<div className={activetab === "story" ? 'tab active' : "tab"}
onClick={()=>setActivetab("story")}
>
  <h3>Story</h3>
 </div>
</div>

{/* tabcontent */}
<div>
{activetab === "post" && (
  <Socialpost />
)}
{activetab === "story" && (
  <Socialstory />
)}
</div>
    
    </div>
  )
}

export default CreateSchedule