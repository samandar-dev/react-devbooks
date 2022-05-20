import React from 'react'

function HeroList({ sliderImg, img, sliderCount }) {
  return (
    <>
      <ul className='hero__list' style={{
        transform: `translateX(-${sliderCount * 1260 - 1260}px)`,
        transition: 'all .8s ease'
      }}>
        {sliderImg.map((itm, i) => (
          <li className='hero__item' key={i + 1}>
            <img className='hero__img' src={img} alt="img" />
          </li>
        ))}
      </ul>
    </>
  )
}

export default HeroList
