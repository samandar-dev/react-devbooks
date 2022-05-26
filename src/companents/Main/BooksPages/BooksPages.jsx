import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import object from '../../../Object'
import './BooksPages.scss'

let arr = []
let newArr = []
function BooksPages({ setSaveObj, saveObj, setSaveObjId }) {
  let ulocation = useLocation()
  let count = 0;
  let bookk, arrIdd;

  const saveFunc = (e) => {
    object.map((obj) => {
      obj.bookObj.map((books) => {
        if (books.bookId === e.target.id) {
          newArr.push(e.target.id)
          arr.push(obj)
          bookk = arr.filter((elem, inex, obj) => obj.indexOf(elem) === inex)
          arrIdd = newArr.filter((elem, inex, obj) => obj.indexOf(elem) === inex)
          console.log("aaa", arr);
          console.log("bbb", bookk);
        }
      })
    })
    setSaveObj([...bookk])
    setSaveObjId([...arrIdd])
  }

  return (
    <>
      {object.map((itm, i) => {
        let bookItem;
        itm.bookObj.map(itmbook => {
          if (itmbook.bookId == ulocation.pathname.split('/').at(-1)) {
            bookItem =
              <div className="bookpages book" key={i + 1}>
                <div className="container">
                  <div className="book__inner">
                    <div className="book__img_desc_box">
                      <div className="book__img_box">
                        <img className='book__img' src={itmbook.bookImg} alt="img" />
                      </div>
                      <div className="book__desc_box">
                        <h3 className="book__name">{itmbook.bookName}</h3>
                        <Link to={`/UserCardPages/${itm.id}`} key={i + 1} className="catmenus__link">
                          <p className="book__username">{itm.name} {itm.lastName} | <span><i className='bx bxs-star'></i> 4.1</span></p>
                        </Link>
                        <ul className="book__desc_list">
                          <li className="book__desc_item bookitem">
                            <p className='bookitem__tit'>Sahifalar soni: <span>376</span></p>
                          </li>
                          <li className="book__desc_item bookitem">
                            <p className='bookitem__tit'>Chop etilgan: <span>2021</span></p>
                          </li>
                          <li className="book__desc_item bookitem">
                            <p className='bookitem__tit'>Janri: <span>Tarixiy</span></p>
                          </li>
                          <li className="book__desc_item bookitem">
                            <p className='bookitem__tit'>Nashriyot: <span>Nihol nashr</span></p>
                          </li>
                        </ul>

                        <div className="book__desc_line">
                          <p>To’liq ma’lumot <i className='bx bx-down-arrow-alt'></i></p>
                          <span></span>
                        </div>

                        <div className="book__desc">
                          <p>{itmbook.bookInfo} <br /> <br />{itmbook.bookInfoTwo}</p>
                        </div>
                        <div className="book__desc_add_box">
                          <p className='book__add_tit'>Mavjud formatlar</p>

                          <div className="book__add-btn_box">
                            <div className="book__audio_elektron">
                              <button className='book__book_btn'> <i className='bx bxs-book-alt'></i> <br />  Qog’oz kitob <br /> <span>27 000 so’m</span></button>
                              <button className='book__book_btn'> <i className='bx bx-headphone'></i> <br />  Audiokitob <br /> <span>6:23 soat</span></button>
                              <button className='book__book_btn'> <i className='bx bx-tab'></i><br />  Elektron <br /> <span>pdf, epub</span></button>
                            </div>

                            <button className='book__add_btn' id={itmbook.bookId} onClick={saveFunc}>Javonga qo’shish</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="book__content bcon">
                      <ul className="bcon__list">
                        <li className="bcon__item">
                          <a className='bcon__link' href="">Muallif haqida</a>
                        </li>
                        <li className="bcon__item">
                          <a className='bcon__link bcon__link-act' href="">Kitobdan iqtiboslar</a>
                        </li>
                        <li className="bcon__item">
                          <a className='bcon__link' href="">Kitobxonlar taqrizi</a>
                        </li>
                      </ul>

                      <div className="bcon__desc">
                        <ul className="bcondesc__list">
                          <li className="bcondesc__item">
                            <span className='bcondesc__icon'><i className='bx bxs-quote-alt-left'></i></span>

                            <p className='bcondesc__text'>Inson bolasi ne kunlarni ko‘rmaydi?!
                              Har bir odam o‘z g‘ami bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib o‘tsa, bu moddiy olam shu kunlarga yetolarmidi?
                              Hayot to‘lqini ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.
                            </p>
                            <div className="bcondesc__btn_box">
                              <button className='bcondesc__btn'><i className='bx bxs-heart'></i></button>
                              <button className='bcondesc__btn'><i className='bx bxs-share-alt'></i></button>
                            </div>
                          </li>
                          <li className="bcondesc__item">
                            <span className='bcondesc__icon'><i className='bx bxs-quote-alt-left'></i></span>

                            <p className='bcondesc__text'>Inson bolasi ne kunlarni ko‘rmaydi?!
                              Har bir odam o‘z g‘ami bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib o‘tsa, bu moddiy olam shu kunlarga yetolarmidi?
                              Hayot to‘lqini ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.
                            </p>
                            <div className="bcondesc__btn_box">
                              <button className='bcondesc__btn'><i className='bx bxs-heart'></i></button>
                              <button className='bcondesc__btn'><i className='bx bxs-share-alt'></i></button>
                            </div>
                          </li>
                          <li className="bcondesc__item">
                            <span className='bcondesc__icon'><i className='bx bxs-quote-alt-left'></i></span>

                            <p className='bcondesc__text'>Inson bolasi ne kunlarni ko‘rmaydi?!
                              Har bir odam o‘z g‘ami bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib o‘tsa, bu moddiy olam shu kunlarga yetolarmidi?
                              Hayot to‘lqini ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.
                            </p>
                            <div className="bcondesc__btn_box">
                              <button className='bcondesc__btn'><i className='bx bxs-heart'></i></button>
                              <button className='bcondesc__btn'><i className='bx bxs-share-alt'></i></button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="book__menus bmenu">
                      <div className="bmenu__tit_btn">
                        <h4 className="bmenu__title">Sizga yoqishi mumkin</h4>
                        <button className='bmenu__btn'>Barchasini ko’rish</button>
                      </div>

                      <div className="bmenu__list_box">
                        <ul className="bmenu__list">
                          {object.map((obj, i) => {
                            count++
                            // let random = Math.floor(Math.random() * 65)
                            if (count <= 3) {
                              return obj.bookObj.map((book, inx) => (
                                <Link Link to={`/BooksPages/${book.bookId}`} key={inx + 1} className="catmenus__link">
                                  <li className="bmenu__item" key={inx + 1}>
                                    <img className='usbook__item_img' src={book.bookImg} alt="user books" />
                                    <p className='usbook__name'>{book.bookName}</p>
                                    <p className='usbook__comment'><i className='bx bxs-star'></i>4.4 • 5200 ta fikrlar</p>
                                  </li>
                                </Link>
                              ))
                            }
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          }
        })
        return bookItem
      })}
    </>
  )
}

export default BooksPages
