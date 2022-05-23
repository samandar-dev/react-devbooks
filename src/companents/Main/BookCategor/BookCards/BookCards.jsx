import React from 'react'
import './BookCards.scss'
import { Link } from 'react-router-dom'

function BookCards({ newBookArr }) {
  return (
    <>
      <ul className="bmenus__list">
        {newBookArr.map((obj, i) => (
          <Link to={`/BooksPages/${obj.id}`} key={i + 1} className="catmenus__link">
            <li className='bmenus__item' >
              <img className='bmenus__img' src={obj.img} alt="img" />
              <div className="bmenus__name_box">
                <h4 className='bmenus__name'>{obj.name}</h4>
                <p className='bmenus__author'>{obj.author}</p>
                <p className='bmenus__comment'><i class='bx bxs-star' ></i> {obj.comments} ta fikrlar</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  )
}

export default BookCards
