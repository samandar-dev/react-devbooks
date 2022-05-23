import React from 'react'
import Header from './Header_Hero/Header/Header'
import UserCardPages from './Main/UserCardPages/UserCardPages'

function UserItems({ navbarItem, navbarFunc }) {
  return (
    <>
      <Header
        navbarItem={navbarItem}
        navbarFunc={navbarFunc} />
      <UserCardPages />
    </>
  )
}

export default UserItems
