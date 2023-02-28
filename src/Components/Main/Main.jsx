import React from 'react'
import MainImage from '../../assets/images/image-web-3-desktop.jpg'
import './Main.css'

export default function Main() {
  return (
    <main>
      <div className="main-img">
        <img className='mainImg' src={MainImage} />
      </div>
      <div className="details">
        <h1 className='main'>The Bright Future of Web 3.0?</h1>
        <div className="CTA">
        <p className='main'>We dive into the next evolution of the web that claims to put the power of platforms back into the hands of the people. But is it really fulfilling it's promise?</p>
        <button>Read More</button>
        </div>
      </div>
    </main>
  )
}
