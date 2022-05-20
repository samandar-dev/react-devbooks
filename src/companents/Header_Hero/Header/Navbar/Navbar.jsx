import React, { useState } from 'react'

function Navbar() {
  const [navbarItem, setNavbarItem] = useState([
    {
      id: 1,
      name: 'Bosh sahifa',
      act: true,
    },
    {
      id: 2,
      name: 'Nasr',
      act: false,
    },
    {
      id: 3,
      name: 'Nazm',
      act: false,
    },
    {
      id: 4,
      name: 'Maqolalar',
      act: false,
    },
    {
      id: 5,
      name: 'Forum',
      act: false,
    },
  ])

  const [navCount, setNavCount] = useState(1)

  const navbarFunc = (e) => {
    let num = Math.floor(e.target.id)

    setNavbarItem(
      navbarItem.map((itm, i) => {
        if (num === itm.id) {
          setNavCount(itm.id)
          return {
            ...itm,
            act: true,
          }
        }
        return {
          ...itm,
          act: false
        }
      }))
  }
  return (
    <>
      <ul className="nav__list">
        {navbarItem.map((itm, i) => (
          <li className="nav__item" key={i + 1}>
            <a className={`nav__link ${itm.act ? 'nav__link-act' : ''}`} id={itm.id} href="#" onClick={navbarFunc}>{itm.name}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Navbar
