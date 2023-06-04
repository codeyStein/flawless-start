// import { useState } from 'react'
import './App.css'
import conf from '../config'
import QuickAction from './widgets/QuickAction'
import TimeDate from './widgets/TimeDate'
import SearchBar from './widgets/SearchBar'

function App() {


  // config variables
  const timeDate = conf.widgets["Time and Date"]
  const searchBar = conf.widgets["Search Bar"]
  const quickAction = conf.widgets["Quick Actions"]
  const theme = conf["theme"]

  // Light/Dark mode variables
  const rs = document.querySelector(":root").style
  let bg = theme === 'dark' ? '#1E1E1E' : '#EEE'
  let primary = theme === 'dark' ? '#fff' : '#000'
  let secondary = theme === 'dark' ? '#343434' : '#DDD'
  rs.setProperty('--primary', primary)
  rs.setProperty('--secondary', secondary)
  rs.setProperty('--bg', bg)

  const QuickActions = quickAction.map(item => {
    return (
      <QuickAction key={item.id} id={item.id} />
    )
  })



  return (
    <div className="App">

      <div className='main'>
        {timeDate["visibility"] === 'show' && <TimeDate />}

        <div className='widgets__section-two'>
          <div className='widget--quick_actions'>
            {QuickActions}
          </div>

          {searchBar["visibility"] === 'show' && <SearchBar />}
        </div>

      </div>

    </div>
  )
}

export default App
