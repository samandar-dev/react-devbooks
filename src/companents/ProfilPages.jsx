import React from 'react'
import Header from './Header_Hero/Header/Header'
import Profil from './Main/Profil/Profil'

function ProfilPages({ navbarItem, navbarFunc, object, setNewCategorArr, newCategorArr }) {
  return (
    <>
      <Header
        navbarItem={navbarItem}
        navbarFunc={navbarFunc}
      />
      <Profil
        object={object}
        setNewCategorArr={setNewCategorArr}
        newCategorArr={newCategorArr}
      />
    </>
  )
}

export default ProfilPages
