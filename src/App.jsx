// import { useState } from 'react'
import './App.css'
import { FaDev, FaGithub, FaYoutube } from 'react-icons/fa';

function App() {

const d = new Date();
//Date
const months = ["Jan.", "Feb.", "Mart.", "April.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]
const days = ["Sun.", "Mon.", "Thu.", "Wed.", "Tue.", "Fri.", "Sat"];

const day = days[d.getDay()]
const dayNum = d.getDate()
const month = months[d.getMonth()]
const date = `${day} ${month} ${dayNum}`

// Time
const hour = d.getHours();
const min = d.getMinutes();
const time = `${hour<10 ? "0"+hour : hour}:${min<10 ? "0"+min : min}`


  return (
    <div className="App">

      <div className='widgets__left'>
        <h2 className='widget--time'>{time}</h2>
        <h2 className='widget--date'>{date}</h2>
      </div>

      <div className='widgets__right'>
        <div className='widget--quick_actions'>
          <div className='widget--quick_action--card'> <FaGithub /> </div>
          <div className='widget--quick_action--card'> <FaDev /> </div>
          <div className='widget--quick_action--card'> <FaYoutube /> </div>
        </div>
        <input type='text' name='search' placeholder='Search For Something Amazing...'></input>
      </div>

    </div>
  )
}

export default App
