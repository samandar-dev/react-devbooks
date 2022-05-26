import React, { useState } from 'react'
import BookCards from './BookCards/BookCards'

function BookCategor({ object, setNewBookArr, newBookArr, newCategorArr, setNewCategorArr }) {
  const [categorItems, setCategorItems] = useState([
    {
      id: 1,
      name: 'Barchasi',
      act: true,
    },
    {
      id: 2,
      name: 'Biznes',
      act: false,
    },
    {
      id: 3,
      name: 'Diniy',
      act: false,
    },
    {
      id: 4,
      name: 'Jahon adabiyoti',
      act: false,
    },
    {
      id: 5,
      name: 'Mustaqillik davri',
      act: false,
    },
  ])
  const [categorCount, setCategorCount] = useState(1)
  const [part, setpart] = useState(6);
  const [data, setData] = useState(newBookArr.slice(0, part));

  const newArrBtn = []
  let parts = newBookArr.length / part
  for (let i = 1; i <= parts; i++) newArrBtn.push(i);

  const handlerPagenation = (e) => {
    let end = (e.target.id - 1) * part
    let partsArr = newBookArr.slice(end, (part + end))
    setData(partsArr);
  }

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

    switch (e.target.textContent) {
      case 'Jahon adabiyoti':
        setData(object.filter(itm => itm.genre.toLocaleLowerCase() === 'jahon'))
        break;
      case 'Diniy':
        setData(object.filter(itm => itm.genre.toLocaleLowerCase() === e.target.textContent.toLocaleLowerCase()))
        break;
      case 'Mustaqillik davri':
        setData(object.filter(itm => itm.genre.toLocaleLowerCase() === 'uzbek'))
        break;
      case 'Biznes':
        setData(object.filter(itm => itm.genre.toLocaleLowerCase() === e.target.textContent.toLocaleLowerCase()))
        break;
      default:
        setData(object)
        break;
    }
    handlerPagenation()
  }

  return (
    <>
      <section className='main__categor categor'>
        <div className="container">
          <div className="categor__inner">
            <h3 className="categor__title">Asosiy kategoriyalar</h3>

            <div className="categor__btns catbtns">
              <ul className="catbtns__list">
                {categorItems.map((itm, i) => (
                  <li className="catbtns__item" key={i + 1}>
                    <button className={`catbtns__btn ${itm.act ? 'catbtns__btn-act' : ''}`}
                      id={itm.id}
                      onClick={categorFunc}
                    >{itm.name}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="categor__menus bmenus">
              <BookCards object={object} newBookArr={data} setNewBookArr={setNewBookArr} />
            </div>
            <div className="btns__box">
              {newArrBtn && newArrBtn.map((e, i) => (
                <button className='pag__btns' onClick={handlerPagenation} key={i} id={e}>{e}</button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BookCategor
