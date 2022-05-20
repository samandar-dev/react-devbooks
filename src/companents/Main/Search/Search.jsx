import React from 'react'
import './_search.scss'

function Search({ categorObj, setNewCategorArr }) {
  let arr = []
  const searchFunc = (e) => {
    categorObj.forEach(itm => {
      if (itm.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) {
        arr.push(itm)
      }
    })
    setNewCategorArr(arr)
  }

  return (
    <>
      <div className="container">
        <div className="main__search msearch">
          <h3 className="msearch__title">Qidirish</h3>
          <form className='msearch__form form' onSubmit={searchFunc}>
            <input className='msearch__inp'
              onChange={searchFunc}
              type="text" name='text'
              id='formInput'
              placeholder='Adiblar, kitoblar, audiolar, maqolalar...' />
            <button className='form__btn' onClick={searchFunc}><i className='bx bx-search-alt'></i> Izlash</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Search
