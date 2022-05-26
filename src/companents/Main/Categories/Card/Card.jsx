import React from 'react'
import { Link } from 'react-router-dom'

function Card({ newCategorArr }) {
  let count = 0;
  let items;
  return (
    <>
      <ul className="catmenus__list">
        {newCategorArr.map((obj, i) => (
          // count++  
          // if (count <= 12) {
          //   items =
          <Link to={`/UserCardPages/${obj.id}`} key={i + 1} className="catmenus__link">
            <li className='catmenus__item' >
              <img className='catmenus__img' src={obj.img} alt="img" />
              <div className="catmenus__name_box">
                <h4 className='catmenus__name'>{obj.name} {obj.lastName}</h4>
                <p className='catmenus__year'>{obj.born}-{obj.died}</p>
                <div className="catmenus__book_player catbookpla">
                  <button className='catbookpla__btn'><i className='bx bxs-book-alt'></i>{obj.book}</button>
                  <button type='' className='catbookpla__btn'><i className='bx bx-headphone'></i>{obj.player}</button>
                </div>
              </div>
            </li>
          </Link>
          // return items
          // }
        ))}
      </ul>

    </>
  )
}

export default Card
