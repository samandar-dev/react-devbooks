import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import BoshSahifa from './companents/BoshSahifa';
import Object from './Object'
import Kitoblar from './companents/Kitoblar';
import UserItems from './companents/UserItems';
import BookPag from './companents/BookPag';
import './App.scss';
import SiginUp from './companents/Main/SiginUp/SiginUp';
import SiginIn from './companents/Main/SiginIn/SiginIn';
import ProfilPages from './companents/ProfilPages';
import EditPages from './companents/Main/EditPages/EditPages';
import Error from './companents/Main/Error/Error';

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

  const [fnameVal, setFnameVal] = useState('')
  const [lnameVal, setLnameVal] = useState('')
  const [phoneeVal, setPhoneeVal] = useState('')
  const [emaillVal, setEmaillVal] = useState('')
  const [passwordVal, setPasswordVal] = useState('')
  const [saveObj, setSaveObj] = useState([])

  const [saveObjId, setSaveObjId] = useState([])

  console.log("ssss", saveObj);
  console.log("idd", saveObjId);

  useEffect(() => {
    setNewCategorArr(Object)
    setNewBookArr(Object)
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
        <Route path='/BoshSahifa' element={<BoshSahifa
          object={Object}
          newCategorArr={newCategorArr}
          setNewCategorArr={setNewCategorArr}
          navbarItem={navbarItem}
          navbarFunc={navbarFunc}
        />}
        />
        <Route path='/' element={<SiginUp
          setFnameVal={setFnameVal}
          setLnameVal={setLnameVal}
          setPhoneeVal={setPhoneeVal}
          setEmaillVal={setEmaillVal}
          setPasswordVal={setPasswordVal}
        />}
        />
        <Route path='/Kitoblar' element={<Kitoblar
          object={Object}
          newBookArr={newBookArr}
          newCategorArr={newCategorArr}
          setNewBookArr={setNewBookArr}
          setNewCategorArr={setNewCategorArr}
          navbarItem={navbarItem}
          navbarFunc={navbarFunc}
        />}
        />
        <Route path='/UserCardPages/:id' element={<UserItems
          navbarItem={navbarItem}
          navbarFunc={navbarFunc} />}
        />
        <Route path='/BooksPages' element={<BookPag
          saveObj={saveObj}
          setSaveObj={setSaveObj}
          setSaveObjId={setSaveObjId}
          navbarItem={navbarItem}
          navbarFunc={navbarFunc} />}
        />
        <Route path='/BooksPages/:id' element={<BookPag
          saveObj={saveObj}
          setSaveObj={setSaveObj}
          setSaveObjId={setSaveObjId}
          navbarItem={navbarItem}
          navbarFunc={navbarFunc} />}
        />

        <Route path='/Profile' element={<ProfilPages
          object={Object}
          saveObj={saveObj}
          saveObjId={saveObjId}
          setSaveObjId={setSaveObjId}
          fnameVal={fnameVal}
          lnameVal={lnameVal}
          navbarItem={navbarItem}
          navbarFunc={navbarFunc}
          setNewCategorArr={setNewCategorArr}
          newCategorArr={newCategorArr}
        />} />
        <Route path='/Forum' element={<SiginUp />} />
        <Route path='/SiginIn' element={<SiginIn />} />
        <Route path='/SiginUp' element={<SiginUp />} />
        <Route path='/EditPages' element={<EditPages
          fnameVal={fnameVal}
          setFnameVal={setFnameVal}
          lnameVal={lnameVal}
          setLnameVal={setLnameVal}
          phoneeVal={phoneeVal}
          setPhoneeVal={setPhoneeVal}
          emaillVal={emaillVal}
          setEmaillVal={setEmaillVal}
          passwordVal={passwordVal}
          setPasswordVal={setPasswordVal}
        />} />
        <Route path='/Nasr' element={<Error navbarItem={navbarItem}
          navbarFunc={navbarFunc} />} />
        <Route path='/Maqolalar' element={<Error navbarItem={navbarItem}
          navbarFunc={navbarFunc} />} />
      </Routes>
    </>
  );
}

export default App;
