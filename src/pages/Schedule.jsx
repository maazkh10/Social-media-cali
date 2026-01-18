import React from 'react'
import CreateSchedule from '../components/CreateSchedule'
import Calendar from '../components/Calendar'
import './schedule.css';

function Schedule() {
  return (
    <div className='shedule-main'>
      <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam iste animi deleniti debitis a ipsam? Omnis animi, a tempore adipisci harum odio, voluptate velit rerum corporis unde doloribus est veniam.</h3>
    <div className='shedule-container'>
        <div className='shedule-left' >
<CreateSchedule />
      </div>

      <div className='shedule-right'>
        <Calendar/>
      </div>
    </div>
    </div>
  )
}

export default Schedule