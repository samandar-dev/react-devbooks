import React, { useState, useEffect } from 'react'
import HeroImg from '../../../assets/Images/hero-img.png'
import HeroList from './HeroList/HeroList'
import HeroSlidBtns from './HeroSlidBtns/HeroSlidBtns'
import './_hero.scss'

function Hero() {
  const [sliderImg, setSliderImg] = useState([
    {
      id: 1,
      img: HeroImg,
      act: true,
    },
    {
      id: 2,
      img: HeroImg,
      act: false,
    },
    {
      id: 3,
      img: HeroImg,
      act: false,
    },
    {
      id: 4,
      img: HeroImg,
      act: false,
    },
  ])

  const [sliderCount, setSliderCount] = useState(1)
  const [time, setTime] = useState(3000)
  const [id, setid] = useState(1)

  const sliderFunc = (e) => {
    let id = Math.floor(e.target.id)
    setid(Math.floor(e.target.id))
    setTime(3000)

    setSliderImg(
      sliderImg.map((itm, i) => {
        if (id == itm.id) {
          setSliderCount(itm.id)
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
      <div className="hero">
        <div className="container">
          <div className="hero__inner">
            <h2 className='hero__title'>Temuriylar  <br /> davri <br /> adabiyoti</h2>
            <HeroSlidBtns sliderImg={sliderImg} sliderFunc={sliderFunc} />
            <div className="hero__slider">
              <HeroList sliderImg={sliderImg} img={HeroImg} sliderCount={sliderCount} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
