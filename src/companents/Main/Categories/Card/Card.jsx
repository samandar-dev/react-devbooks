import React, { useEffect } from 'react'

function Card({ categorObj, newCategorArr, setNewCategorArr }) {

  useEffect(() => {
    return () => {
      setNewCategorArr(categorObj)
    };
  }, []);

  return (
    <>
      <ul className="catmenus__list">
        {newCategorArr.map((obj, i) => (
          <li className='catmenus__item' key={i + 1}>
            <img className='catmenus__img' src={obj.img} alt="img" />
            <div className="catmenus__name_box">
              <h4 className='catmenus__name'>{obj.name}</h4>
              <p className='catmenus__year'>{obj.year}</p>
              <div className="catmenus__book_player catbookpla">
                <button className='catbookpla__btn'><i className='bx bxs-book-alt'></i>{obj.book}</button>
                <button className='catbookpla__btn'><i className='bx bx-headphone'></i>{obj.player}</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Card
