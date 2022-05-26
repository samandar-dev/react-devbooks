import React from 'react'
import './BookCards.scss'
import { Link } from 'react-router-dom'

function BookCards({ newBookArr }) {
  return (
    <>
      <ul className="bmenus__list">
        {newBookArr.map((obj, i) => (
          obj.bookObj.map((book, inx) => (
            <Link Link to={`/BooksPages/${book.bookId}`} key={inx + 1} className="catmenus__link">
              <li className='bmenus__item' >
                <img className='bmenus__img' src={book.bookImg} alt="img" />
                <div className="bmenus__name_box">
                  <h4 className='bmenus__name'>{book.bookName}</h4>
                  <p className='bmenus__author'>{obj.name} {obj.lastName}</p>
                  <p className='bmenus__comment'><i className='bx bxs-star' ></i> 3.512 ta fikrlar</p>
                </div>
              </li>
            </Link>
          ))
        ))}
      </ul>
    </>
  )
}

export default BookCards
