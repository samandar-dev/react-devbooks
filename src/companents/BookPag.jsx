import React from 'react'
import Header from './Header_Hero/Header/Header'
import BooksPages from './Main/BooksPages/BooksPages'

function BookPag({ navbarItem, navbarFunc, setSaveObj, saveObj, setSaveObjId }) {
  return (
    <>
      <Header
        navbarItem={navbarItem}
        navbarFunc={navbarFunc}
      />
      <BooksPages setSaveObj={setSaveObj} saveObj={saveObj} setSaveObjId={setSaveObjId} />
    </>
  )
}

export default BookPag
