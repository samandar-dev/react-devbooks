import React from 'react'
import HeaderImg from '../../../assets/Images/header-img.png'
import Navbar from './Navbar/Navbar'
import './_header.scss'

function Header() {
  return (
    <>
      <header className='header'>
        <div className="container">
          <div className="header__inner">
            <h1 className='header__title'>Badiiyat</h1>

            <nav className='header__nav nav'>
              <Navbar />
            </nav>

            <div className="header__categor hecate">
              <img src={HeaderImg} alt="img" />
              <button className='hecate__btn'><i className='bx bx-chevron-down'></i></button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
