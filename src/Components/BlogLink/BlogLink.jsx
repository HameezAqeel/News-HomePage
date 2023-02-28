import React from 'react'
import './BlogLink.css'
import BlogImage1 from '../../assets/images/image-retro-pcs.jpg' 
import BlogImage2 from '../../assets/images/image-top-laptops.jpg'
import BlogImage3 from '../../assets/images/image-gaming-growth.jpg'

export default function BlogLink() {
  return (
    <div className='blogLink'>
      <div className="blogCard">
        <img className='blogImage' src={BlogImage1} />
      <div className="cardInfo">
        <h1 className='blogCard'>01</h1>
        <h3 className='blogCard'>Reviving Retro PCs</h3>
        <p className='blogCard'>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="blogCard">
        <img className='blogImage' src={BlogImage2} />
        <div className="cardInfo">
        <h1 className='blogCard'>02</h1>
        <h3 className='blogCard'>Top 10 Laptops of 2023</h3>
        <p className='blogCard'>Our best picks for various needs and purposes</p>
        </div>
        </div>
      <div className="blogCard">
        <img className='blogImage' src={BlogImage3} />
        <div className="cardInfo">
        <h1 className='blogCard'>03</h1>
        <h3 className='blogCard'>The Growth of Gaming</h3>
        <p className='blogCard'>How the pandemic has sparked fresh oppurtinities</p>
        </div>
      </div>
    </div>
  )
}
