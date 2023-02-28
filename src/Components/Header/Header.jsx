import React from 'react'
import Logo from '../../assets/images/logo.svg'
import './Header.css'

export default function Header() {
  return (
    <header>
      <img className='logo' src={Logo}></img>
      <nav>
        <ul>
         <li>Home</li>
         <li>New</li>
         <li>Popular</li>
         <li>Trending</li>
         <li>Categories</li>
        </ul>
      </nav>
    </header>
  )
}
