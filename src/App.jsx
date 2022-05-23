import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import BoshSahifa from './companents/BoshSahifa';
import Object from './companents/Object'
import BookObj from './companents/BookObject'
import Kitoblar from './companents/Kitoblar';
import UserItems from './companents/UserItems';
import BookPag from './companents/BookPag';
import './App.scss';

function App() {
  const [newCategorArr, setNewCategorArr] = useState([])
  const [newBookArr, setNewBookArr] = useState([])
  const [navbarItem, setNavbarItem] = useState([
    {
      id: 1,
      name: 'Bosh sahifa',
      act: true,
    },
    {
      id: 2,
      name: 'Nasr',
      act: false,
    },
    {
      id: 3,
      name: 'Kitoblar',
      act: false,
    },
    {
      id: 4,
      name: 'Maqolalar',
      act: false,
    },
    {
      id: 5,
      name: 'Forum',
      act: false,
    },
  ])
  const [navCount, setNavCount] = useState(1)

  useEffect(() => {
    setNewCategorArr(Object)
    setNewBookArr(BookObj)
  }, []);


  const navbarFunc = (e) => {
    let num = Math.floor(e.target.id)

    setNavbarItem(
      navbarItem.map((itm, i) => {
        if (num === itm.id) {
          setNavCount(itm.id)
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

  return (
    <>
      <Routes>
        <Route path='/' element={<BoshSahifa
          bookObj={Object}
          object={Object}
          newCategorArr={newCategorArr}
          setNewCategorArr={setNewCategorArr}
          navbarItem={navbarItem}
          navbarFunc={navbarFunc}
        />}
        />
        <Route path='/Kitoblar' element={<Kitoblar
          bookObj={BookObj}
          object={Object}
          newBookArr={newBookArr}
          setNewBookArr={setNewBookArr}
          navbarItem={navbarItem}
          navbarFunc={navbarFunc}
        />}
        />
        <Route path='/UserCardPages/:id' element={<UserItems
          navbarItem={navbarItem}
          navbarFunc={navbarFunc} />}
        />
        <Route path='/BooksPages/:id' element={<BookPag
          navbarItem={navbarItem}
          navbarFunc={navbarFunc} />}
        />
      </Routes>
    </>
  );
}

export default App;
