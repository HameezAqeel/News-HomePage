import React from 'react'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <aside>
      <h1 className='aside'>New</h1>
      <div className="update">
        <h3>Hydrogen vs Electric Cars</h3>
        <p className='aside'>Will hydrogen fueled cars ever catchj up to EV?</p>
        <hr />
      </div>
      <div className="update">
        <h3>The Downsides of AI Artistry</h3><p className='aside'>What are the possible adverse effects of on-demand AI image generation?</p><hr />
      </div>
      <div className="update"><h3>Is VC Funding Drying Up?</h3><p className='aside'>Private funding my VC firms is down 50% YOY. We take a look at what that means.</p><hr /></div>
    </aside>
  )
}
