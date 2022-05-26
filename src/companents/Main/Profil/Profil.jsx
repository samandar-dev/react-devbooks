import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Profil.scss'

function Profil({ fnameVal, lnameVal, saveObjId, saveObj }) {
  const [categorItems, setCategorItems] = useState([
    {
      id: 1,
      name: 'O’qilganlar',
      act: false,
    },
    {
      id: 2,
      name: 'O’qishni xohlayman',
      act: true,
    },
    {
      id: 3,
      name: 'O’qilmoqda',
      act: false,
    },
    {
      id: 4,
      name: 'Adiblar',
      act: false,
    },
  ])
  const [categorCount, setCategorCount] = useState(1)

  const categorFunc = (e) => {
    let num = Math.floor(e.target.id)
    setCategorItems(
      categorItems.map((itm, i) => {
        if (num === itm.id) {
          setCategorCount(itm.id)
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

  let obj;

  console.log("qqqqqqqqqqqq", saveObj);

  return (
    <>
      <div className="port">
        <div className="container">
          <div className="port__inner">
            <div className="port__hero phero">
              <div className="phero__desc phdesc">
                <div className="phdesc__img_box">
                  <img className='phdesc__img' src="https://imgur.com/iQwoggz.png" alt="img" />
                  <span className="phdesc__star">
                    <i className='bx bxs-star'></i>
                  </span>
                  <p className='phdesc__user_tit'>Oltin kitobxon</p>
                  <p className='phdesc__user_countbook'>186 ta kitob o’qigan</p>
                </div>

                <div className="phdesc__name">

                  <h3 className="phdesc__name" >{fnameVal} {lnameVal}</h3>

                  <ul className='phdesc__bio'>
                    <li className="phdesc__bio_item">
                      <p className='phdesc__bio_tit'>Tavallud: <span>February 08, 1999</span></p>
                    </li>
                    <li className="phdesc__bio_item">
                      <p className='phdesc__bio_tit'>Manzili: <span>Jizzax</span></p>
                    </li>
                    <li className="phdesc__bio_item">
                      <p className='phdesc__bio_tit'>Bio: <span>Graphic designer and Developer</span></p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="port__hero_img_box">
                <img className='port__hero_img' src="https://imgur.com/1ZJeEbK.png" alt="img" />
              </div>
            </div>

            <div className="port__main pmain">
              <div className="pmain__left col-4"></div>

              <div className="pmain__right col-8">
                <div className="pmain__right_topmenu">
                  <ul className="pmain-right__list">
                    {categorItems.map((itm, i) => (
                      <li className="pmain-right__item" key={i + 1}>
                        <button className={`pmain-right__tit ${itm.act ? 'catbtns__btn-act' : ''}`}
                          id={itm.id}
                          onClick={categorFunc}>{itm.name}</button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pmain__right_books">
                  <ul className='pmain__books_list'>
                    {saveObjId.map(idd => (
                      saveObj.map(obj => (
                        obj.bookObj.map((itm, i) => (
                          idd == itm.bookId ?
                            <Link to={`/BooksPages/${itm.bookId}`} className='link'>
                              <li className="pmain__books_item" key={i + 1}>
                                <img className='pmain__books_img' src={itm.bookImg} alt="user books" />
                                <p className='pmain__books__name'>{itm.bookName}</p>
                                <p className='pmain__books__comment'><i className='bx bxs-star'></i>4.4 • 5200 ta fikrlar</p>
                              </li> </Link> : ""
                        ))))))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profil
