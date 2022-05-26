import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({ navbarItem, navbarFunc }) {

  return (
    <>
      <ul className="nav__list">
        {navbarItem.map((itm, i) => (
          <li className="nav__item" key={i + 1}>
            <NavLink
              to={itm.name == 'Bosh sahifa' ? '/BoshSahifa' : '/' + itm.name}
              // to={itm.name == 'Bosh sahifa' ? '/' : '/' + itm.name}
              className={`nav__link ${itm.act ? 'nav__link-act' : ''}`}
              id={itm.id} onClick={navbarFunc}>{itm.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Navbar
