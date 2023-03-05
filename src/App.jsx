import { useState } from 'react'
// import { images } from './constants/images'
import './App.css'
import sherlock from './assets/sherlock.jpg'

function App({name, image}) {
  const [count, setCount] = useState(0);
  return (
    <div id="root">
      <div className="card">
        <div className="cardImage">
          <img src={sherlock} alt="" />
        </div>
        <div className="cardText">
          <div className="title">
            {name}
          </div>
          <div className="info">
            <p>Sherlock is an undergraduate at Vellore institute of technology, Chennai. He is currently pursing Btech in CSE Core. He likes coding.</p>
          </div>
          <button onClick={()=>{
            setCount(count+1);
          }}>Likes:{count}</button>
        </div>
      </div>
    </div>

  )
}

export default App
