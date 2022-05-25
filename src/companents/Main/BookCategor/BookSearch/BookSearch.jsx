import React from 'react'
import '../../Search/_search.scss'

function BookSearch({ object, setNewBookArr }) {
  let arr = []
  const searchFunc = (e) => {
    object.forEach(itm => {
      itm.bookObj.map(book => {
        if (book.bookName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) {
          arr.push(itm)
        }
      })
    })
    setNewBookArr(arr)
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

export default BookSearch
