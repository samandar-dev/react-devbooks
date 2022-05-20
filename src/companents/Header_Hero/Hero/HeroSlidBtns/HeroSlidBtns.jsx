import React from 'react'

function HeroSlidBtns({ sliderImg, sliderFunc }) {
  return (
    <>
      <div className="hero__btns">
        {sliderImg.map((itm, i) => (
          <button className={`hero__btn ${itm.act ? 'hero__btn-act' : ''}`} key={i + 1} id={itm.id} onClick={sliderFunc}></button>
        ))}
      </div>
    </>
  )
}

export default HeroSlidBtns
