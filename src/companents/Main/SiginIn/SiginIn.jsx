import React from 'react'
import { Link } from 'react-router-dom'

function SiginIn() {
  return (
    <>
      <div className="siginup sigup">
        <div className="sigup__inner">
          <div className="sigup__left">
            <div className="sigup__img_box">
              <img className='sigin__left_img' src="https://imgur.com/q9djfad.png" alt="img" />
            </div>
          </div>
          <div className="sigup__right col-6">
            <div className="sigup__right_box">
              <h2 className="sigup__title">Sigin in</h2>
              <p className='sigup__links'>Do not you have an account? <Link to={"/SiginUp"}>Sign up</Link></p>

              <form className='sigin__form'>
                <input className='sigin__form_inp' type="text" name="text" id="email" placeholder='Email' required />
                <input className='sigin__form_inp' type="text" name="text" id="password" placeholder='Password' required />

                <Link to={'/BoshSahifa'}><button className='sigin__form_btn'>Next step</button></Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SiginIn
