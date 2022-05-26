import React from 'react'
import { Link } from 'react-router-dom'
import DropDoun from './DropDoun/DropDoun'
import Navbar from './Navbar/Navbar'
import './_header.scss'

function Header({ navbarItem, navbarFunc }) {
  return (
    <>
      <header className='header'>
        <div className="container">
          <div className="header__inner">
            <Link to={'/'} className='titleLink'>
              <h1 className='header__title'>Badiiyat</h1>
            </Link>

            <nav className='header__nav nav'>
              <Navbar navbarItem={navbarItem} navbarFunc={navbarFunc} />
            </nav>

            <div className="header__categor hecate">
              <DropDoun />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
