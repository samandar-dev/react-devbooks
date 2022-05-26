import React from 'react'
import Header from './Header_Hero/Header/Header'
import Profil from './Main/Profil/Profil'

function ProfilPages({ userObj, saveObj, navbarItem, navbarFunc, object, setNewCategorArr, newCategorArr, fnameVal, lnameVal, saveObjId }) {
  return (
    <>
      <Header
        navbarItem={navbarItem}
        navbarFunc={navbarFunc}
      />
      <Profil
        fnameVal={fnameVal}
        lnameVal={lnameVal}
        object={object}
        saveObj={saveObj}
        setNewCategorArr={setNewCategorArr}
        newCategorArr={newCategorArr}
        saveObjId={saveObjId}
      />
    </>
  )
}

export default ProfilPages
