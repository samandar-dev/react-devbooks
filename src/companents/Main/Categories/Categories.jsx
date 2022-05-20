import React, { useState } from 'react'
import './_categories.scss'
import Card from './Card/Card'

function Categories({ categorObj, setNewCategorArr, newCategorArr }) {
  const [categorItems, setCategorItems] = useState([
    {
      id: 1,
      name: 'Temuriylar davri',
      act: false,
    },
    {
      id: 2,
      name: 'Jadid adabiyoti',
      act: true,
    },
    {
      id: 3,
      name: 'Sovet davri',
      act: false,
    },
    {
      id: 4,
      name: 'Mustaqillik davri',
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

    switch (e.target.textContent) {
      case 'Temuriylar davri':
        setNewCategorArr(categorObj.filter(itm => itm.categor === e.target.textContent))
        break;
      case 'Sovet davri':
        setNewCategorArr(categorObj.filter(itm => itm.categor === e.target.textContent))
        break;
      case 'Mustaqillik davri':
        setNewCategorArr(categorObj.filter(itm => itm.categor === e.target.textContent))
        break;
      default:
        setNewCategorArr(categorObj)
        break;
    }
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

            <div className="categor__menus catmenus">
              <Card categorObj={categorObj} newCategorArr={newCategorArr} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Categories
