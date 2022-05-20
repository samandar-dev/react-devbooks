import React from 'react'
import Categories from './Categories/Categories'
import Search from './Search/Search'

function Main({ categorObj, setNewCategorArr, newCategorArr }) {
  return (
    <>
      <Search categorObj={categorObj} setNewCategorArr={setNewCategorArr} newCategorArr={newCategorArr} />
      <Categories categorObj={categorObj} setNewCategorArr={setNewCategorArr} newCategorArr={newCategorArr} />
    </>
  )
}

export default Main
