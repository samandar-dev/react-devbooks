import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Object from '../../Object'
import './UserCardPages.scss';

function UserCardPages() {
  let ulocation = useLocation()
  return (
    <>
      {Object.map((itm, i) => {
        if (itm.id == ulocation.pathname.split('/').at(-1)) {
          return (
            <div className="userpages uspag" key={i + 1} >
              <div className="uspag__inner">
                <div className="uspag__left uslef">
                  <div className="uslef__img_box">
                    <img className='uslef__img' src={itm.img} alt="userImg" />
                  </div>
                  <div className="uslef__name_box usname">
                    <div className="usleft__left">
                      <p className="usname__tit">Tavallud sanasi</p>
                      <p className="usname__year">5-Avg 1941</p>
                      <p className='usname__tit'>Toshkent, Uzbekistan</p>
                    </div>
                    <span className='usleft__span'>--</span>
                    <div className="usleft__right">
                      <p className="usname__tit">Tavallud sanasi</p>
                      <p className="usname__year">24-MAY 2013</p>
                      <p className='usname__tit'>Toshkent, Uzbekistan</p>
                    </div>
                  </div>
                </div>
                <div className="uspag__right usrig">
                  <h3 className="usrig__name">{itm.name}</h3>
                  <p className="usrig__desc">{itm.desc}</p>
                  <div className="usrig__content uscon">
                    <h4 className="uscon__title"><i class='bx bxs-bookmark-star'></i>Ijodi</h4>
                    <p className="uscon__desc">
                      Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.
                    </p>
                  </div>

                  <div className="usrig__books usbook">
                    <div className="usbook__top">
                      <h4 className="usbook__title">Asarlari</h4>
                      <button className="usbook__btn">Barchasini ko’rish</button>
                    </div>
                    <div className="usbook__list_box">
                      <ul className="usbook__list">
                        {itm.userbooks.map((el, i) => (
                          <Link to={`/BooksPages/${i + 1}`} key={i + 1} className="catmenus__link">
                            <li className="usbook__item" key={i + 1}>
                              <img className='usbook__item_img' src={el[0]} alt="user books" />
                              <p className='usbook__name'>{el[1]}</p>
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

export default UserCardPages
