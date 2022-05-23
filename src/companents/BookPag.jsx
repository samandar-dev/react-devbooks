import React from 'react'
import Header from './Header_Hero/Header/Header'
import BooksPages from './Main/BooksPages/BooksPages'

function BookPag({ navbarItem, navbarFunc }) {
  return (
    <>
      <Header
        navbarItem={navbarItem}
        navbarFunc={navbarFunc}
      />
      <BooksPages />
    </>
  )
}

export default BookPag
