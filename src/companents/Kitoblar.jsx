import React from 'react'
import Header from './Header_Hero/Header/Header'
import Hero from './Header_Hero/Hero/Hero'
import BookCategor from './Main/BookCategor/BookCategor'
import BookSearch from './Main/BookCategor/BookSearch/BookSearch'

function Kitoblar({ bookObj, newCategorArr, object, setNewBookArr, setNewCategorArr, newBookArr, navbarItem, navbarFunc }) {
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
        setNewCategorArr={setNewCategorArr}
        newCategorArr={newCategorArr}
      />
    </>
  )
}

export default Kitoblar
