import React from 'react'
import Header from '../../Header_Hero/Header/Header'
import './Error.scss'

function Error({ navbarItem, navbarFunc }) {
  return (
    <>
      <Header navbarItem={navbarItem} navbarFunc={navbarFunc} />
      <p className='error_pag'>404 error</p>
    </>
  )
}

export default Error
