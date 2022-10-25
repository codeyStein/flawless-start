// import { useState } from 'react'
import './App.css'

function App() {



  return (
    <div className="App">

      <div className='widgets__left'>
        <h2 className='widget--time'>00:00</h2>
        <h2 className='widget--date'>Null. Null. NaN</h2>
      </div>

      <div className='widgets__right'>
        <div className='widget--quick_actions'>
          <div className='widget--quick_action--card'>UNDEFINED</div>
          <div className='widget--quick_action--card'>UNDEFINED</div>
          <div className='widget--quick_action--card'>UNDEFINED</div>
        </div>
        <input type='text' name='search' placeholder='Search For Something Amazing'></input>
      </div>

    </div>
  )
}

export default App
