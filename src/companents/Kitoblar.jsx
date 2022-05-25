import React from 'react'
import Header from './Header_Hero/Header/Header'
import Hero from './Header_Hero/Hero/Hero'
import BookCategor from './Main/BookCategor/BookCategor'
import BookSearch from './Main/BookCategor/BookSearch/BookSearch'

function Kitoblar({ bookObj, object, setNewBookArr, newBookArr, navbarItem, navbarFunc }) {
  return (
    <>
      <Header
        navbarItem={navbarItem}
        navbarFunc={navbarFunc}
      />
      <Hero />
      <BookSearch
        object={object}
        setNewBookArr={setNewBookArr}
      />
      <BookCategor
        object={object}
        newBookArr={newBookArr}
        setNewBookArr={setNewBookArr}
      />
    </>
  )
}

export default Kitoblar
