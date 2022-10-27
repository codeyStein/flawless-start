// import { useState } from 'react'
import './App.css'
import { FaGithub, FaDev, FaYoutube } from 'react-icons/fa';
import Config from './config'

function App() {

// config variables
const conf = Config[0]
const timeDate = conf.widgets.timeDate
const searchBar = conf.widgets.searchBar

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


const searchProvider = searchBar.searchProvider


  return (
    <div className="App">

      <div className='widgets__left'>
        { timeDate.visibility==='show' && <h2 className='widget--time'>{time}</h2> }
        { timeDate.visibility==='show' && <h2 className='widget--date'>{date}</h2> }
      </div>

      <div className='widgets__right'>
        <div className='widget--quick_actions'>
          <div className='widget--quick_action--card'> <FaGithub /> </div>
          <div className='widget--quick_action--card'> <FaDev /> </div>
          <div className='widget--quick_action--card'> <FaYoutube /> </div>
        </div>
        {
        searchBar.visibility==='show' &&
        <form action={`${
        searchProvider==="google" ? "https://google.com/search" : 
        searchProvider==="bing" ? "https://www.bing.com/search?form=MOZLBR&pc=MOZI&q" :
        "https://duckduckgo.com/"
        }`}>
          <input name='q' placeholder='Search For Something Amazing...'/>
        </form>
        }
      </div>

    </div>
  )
}

export default App
