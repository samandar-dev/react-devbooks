import React, { useState, useEffect } from 'react'
import Header from './Header_Hero/Header/Header'
import Hero from './Header_Hero/Hero/Hero'
import Main from './Main/Main'
import categorImg_1 from '../assets/Images/categor-img-1.png'
import categorImg_2 from '../assets/Images/categor-img-2.png'
import categorImg_3 from '../assets/Images/categor-img-3.png'
import categorImg_4 from '../assets/Images/categor-img-4.png'
import categorImg_5 from '../assets/Images/categor-img-5.png'
import categorImg_6 from '../assets/Images/categor-img-6.png'
import categorImg_7 from '../assets/Images/categor-img-7.png'
import categorImg_8 from '../assets/Images/categor-img-8.png'
import categorImg_9 from '../assets/Images/categor-img-9.png'
import categorImg_10 from '../assets/Images/categor-img-10.png'
import categorImg_11 from '../assets/Images/categor-img-11.png'
import './_companents.scss'

const categorObj = [
  {
    id: 1,
    name: `Abdulla Avloniy`,
    year: '1878-1934',
    img: categorImg_1,
    book: 34,
    player: 13,
    categor: 'Temuriylar davri',
  },
  {
    id: 2,
    name: `Nusrat Rahmat`,
    year: '1878-1934',
    img: categorImg_2,
    book: 34,
    player: 13,
    categor: 'Mustaqillik davri',
  },
  {
    id: 3,
    name: `Rahmonberdi Madazimov`,
    year: '1878-1934',
    img: categorImg_3,
    book: 34,
    player: 13,
    categor: 'Temuriylar davri',
  },
  {
    id: 4,
    name: `Hamza Hakimzoda Niyoziy`,
    year: '1878-1934',
    img: categorImg_4,
    book: 34,
    player: 13,
    categor: 'Sovet davri',
  },
  {
    id: 5,
    name: `Abdulhamid Cho'lpon`,
    year: '1878-1934',
    img: categorImg_5,
    book: 34,
    player: 13,
    categor: 'Sovet davri',
  },
  {
    id: 6,
    name: `Abdurauf Fitrat`,
    year: '1878-1934',
    img: categorImg_6,
    book: 34,
    player: 13,
    categor: 'Temuriylar davri',
  },
  {
    id: 7,
    name: `Abdulmajid Qodiriy`,
    year: '1878-1934',
    img: categorImg_7,
    book: 34,
    player: 13,
    categor: 'Sovet davri',
  },
  {
    id: 8,
    name: `Munavvarqori Abdurashidxonov`,
    year: '1878-1934',
    img: categorImg_8,
    book: 34,
    player: 13,
    categor: 'Mustaqillik davri',
  },
  {
    id: 9,
    name: `Abdulla Qodiriy`,
    year: '1878-1934',
    img: categorImg_9,
    book: 34,
    player: 13,
    categor: 'Temuriylar davri',
  },
  {
    id: 10,
    name: `Mahmuxo’ja Behbudiy`,
    year: '1878-1934',
    img: categorImg_10,
    book: 34,
    player: 13,
    categor: 'Mustaqillik davri',
  },
  {
    id: 11,
    name: `Hoji Muin`,
    year: '1878-1934',
    img: categorImg_11,
    book: 34,
    player: 13,
    categor: 'Sovet davri',
  },
]

function Companents() {
  const [newCategorArr, setNewCategorArr] = useState([])

  useEffect(() => {
    return () => {
      setNewCategorArr(categorObj)
    };
  }, []);

  return (
    <>
      <section className='header-hero'>
        <Header />
        <Hero />
      </section>
      <main className='main'>
        <Main categorObj={categorObj} newCategorArr={newCategorArr} setNewCategorArr={setNewCategorArr} />
      </main>
    </>
  )
}

export default Companents
