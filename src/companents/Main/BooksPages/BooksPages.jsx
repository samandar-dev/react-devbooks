import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import bookObj from '../../BookObject'
import './BooksPages.scss'

function BooksPages() {
  let ulocation = useLocation()
  return (
    <>
      {bookObj.map((itm, i) => {
        if (itm.id == ulocation.pathname.split('/').at(-1)) {
          return (
            <div className="bookpages book">
              <div className="container">
                <div className="book__inner">
                  <div className="book__img_desc_box">
                    <div className="book__img_box">
                      <img className='book__img' src={itm.img} alt="img" />
                    </div>
                    <div className="book__desc_box">
                      <h3 className="book__name">{itm.name}</h3>
                      <p className="book__username">{itm.author} | <span><i class='bx bxs-star'></i> 4.1</span></p>
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
                        <p>To’liq ma’lumot <i class='bx bx-down-arrow-alt'></i></p>
                        <span></span>
                      </div>

                      <div className="book__desc">
                        <p>Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан  шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. <br /> <br />

                          Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.
                        </p>
                      </div>
                      <div className="book__desc_add_box">
                        <p className='book__add_tit'>Mavjud formatlar</p>

                        <div className="book__add-btn_box">
                          <div className="book__audio_elektron">
                            <button className='book__book_btn'> <i class='bx bxs-book-alt'></i> <br />  Qog’oz kitob <br /> <span>27 000 so’m</span></button>
                            <button className='book__book_btn'> <i className='bx bx-headphone'></i> <br />  Audiokitob <br /> <span>6:23 soat</span></button>
                            <button className='book__book_btn'> <i class='bx bx-tab'></i><br />  Elektron <br /> <span>pdf, epub</span></button>
                          </div>

                          <button className='book__add_btn'>Javonga qo’shish</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="book__content bcon">
                    <ul className="bcon__list">
                      <Link to={`/UserCardPages/${itm.id}`} key={i + 1} className="catmenus__link">
                        <li className="bcon__item">
                          <a className='bcon__link' href="">Muallif haqida</a>
                        </li>
                      </Link>
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
                          <span className='bcondesc__icon'><i class='bx bxs-quote-alt-left'></i></span>

                          <p className='bcondesc__text'>Inson bolasi ne kunlarni ko‘rmaydi?!
                            Har bir odam o‘z g‘ami bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib o‘tsa, bu moddiy olam shu kunlarga yetolarmidi?
                            Hayot to‘lqini ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.
                          </p>
                          <div className="bcondesc__btn_box">
                            <button className='bcondesc__btn'><i class='bx bxs-heart'></i></button>
                            <button className='bcondesc__btn'><i class='bx bxs-share-alt'></i></button>
                          </div>
                        </li>
                        <li className="bcondesc__item">
                          <span className='bcondesc__icon'><i class='bx bxs-quote-alt-left'></i></span>

                          <p className='bcondesc__text'>Inson bolasi ne kunlarni ko‘rmaydi?!
                            Har bir odam o‘z g‘ami bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib o‘tsa, bu moddiy olam shu kunlarga yetolarmidi?
                            Hayot to‘lqini ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.
                          </p>
                          <div className="bcondesc__btn_box">
                            <button className='bcondesc__btn'><i class='bx bxs-heart'></i></button>
                            <button className='bcondesc__btn'><i class='bx bxs-share-alt'></i></button>
                          </div>
                        </li>
                        <li className="bcondesc__item">
                          <span className='bcondesc__icon'><i class='bx bxs-quote-alt-left'></i></span>

                          <p className='bcondesc__text'>Inson bolasi ne kunlarni ko‘rmaydi?!
                            Har bir odam o‘z g‘ami bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib o‘tsa, bu moddiy olam shu kunlarga yetolarmidi?
                            Hayot to‘lqini ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.
                          </p>
                          <div className="bcondesc__btn_box">
                            <button className='bcondesc__btn'><i class='bx bxs-heart'></i></button>
                            <button className='bcondesc__btn'><i class='bx bxs-share-alt'></i></button>
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
                        {bookObj.map((obj, i) => (
                          <Link to={`/BooksPages/${obj.id}`} key={i + 1} className="catmenus__link">
                            <li className="bmenu__item" key={i + 1}>
                              <img className='usbook__item_img' src={obj.img} alt="user books" />
                              <p className='usbook__name'>{obj.name}</p>
                              <p className='usbook__comment'><i className='bx bxs-star'></i>4.4 • 5200 ta fikrlar</p>
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      })}
    </>
  )
}

export default BooksPages
