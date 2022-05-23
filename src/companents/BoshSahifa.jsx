import React from 'react'
import Header from './Header_Hero/Header/Header'
import Hero from './Header_Hero/Hero/Hero'
import Categories from './Main/Categories/Categories'
import Search from './Main/Search/Search'

function BoshSahifa({ bookObj, object, setNewCategorArr, newCategorArr, navbarItem, navbarFunc }) {
  return (
    <>
      <Header
        navbarItem={navbarItem}
        navbarFunc={navbarFunc} />
      <Hero />
      <Search categorObj={object} setNewCategorArr={setNewCategorArr} newCategorArr={newCategorArr} />
      <Categories categorObj={object} setNewCategorArr={setNewCategorArr} newCategorArr={newCategorArr} />
    </>
  )
}

export default BoshSahifa
