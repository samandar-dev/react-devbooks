import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SiginUp.scss'
let arr = []

function SiginUp({ saveObj, setSaveObj }) {
  const [fname, setFname] = useState(true)
  const [lname, setLname] = useState(true)
  const [phonee, setPhonee] = useState(true)
  const [emaill, setEmaill] = useState(true)
  const [passwordd, setPasswordd] = useState(true)
  const [idd, setIdd] = useState(0)

  const [fnameVal, setFnameVal] = useState('')
  const [lnameVal, setLnameVal] = useState('')
  const [phoneeVal, setPhoneeVal] = useState('')
  const [emaillVal, setEmaillVal] = useState('')
  const [passwordVal, setPasswordVal] = useState('')

  // const [saveObj, setSaveObj] = useState([])

  const addUserObj = (e) => {
    if (e.target.id === 'firstName') {
      if (e.target.value.length > 2) {
        setFnameVal(e.target.value)
        setFname(true)
      }
      else {
        setFname(false)
      }
    }
    if (e.target.id === 'lastName') {
      if (e.target.value.length > 2) {
        setLnameVal(e.target.value)
        setLname(true)
      }
      else {
        setLname(false)
      }
    }
    if (e.target.id === 'number') {
      if (e.target.value.length >= 9) {
        setPhoneeVal(e.target.value)
        setPhonee(true)
      }
      else {
        setPhonee(false)
      }
    }
    if (e.target.id === 'email') {
      if (e.target.value.length >= 2 && e.target.value.includes('@')) {
        setEmaillVal(e.target.value)
        setEmaill(true)
      }
      else {
        setEmaill(false)
      }
    }
    if (e.target.id === 'password') {
      if (e.target.value.length >= 8) {
        setPasswordVal(e.target.value)
        setPasswordd(true)
      }
      else {
        setPasswordd(false)
      }
    }
  }

  const submitFunc = (e) => {
    e.preventDefault()
    let id = setIdd(idd + 1)
    let obj = {
      id: id,
      firstName: fnameVal,
      lastName: lnameVal,
      email: emaillVal,
      phone: phoneeVal,
      password: passwordVal,
      date: '08',
      month: "February",
      year: 1999,
    }
    arr.push(obj)
    setSaveObj([...arr])
    console.log(arr);
    // console.log(userObj);
  }

  return (
    <>
      <div className="siginup sigup">
        <div className="sigup__inner">
          <div className="sigup__left">
            <div className="sigup__img_box">
              <img className='sigin__left_img' src="https://imgur.com/mCnkXy2.png" alt="img" />
            </div>
          </div>
          <div className="sigup__right">
            <div className="sigup__right_box">
              <h2 className="sigup__title">Sigin up</h2>
              <p className='sigup__links'>Already have an account? <Link to={"/SiginIn"}>Sign in</Link></p>

              <form className='sigin__form' onSubmit={submitFunc}>
                <input
                  className={`sigin__form_inp ${fname ? "" : "inpBorder"}`}
                  type="text" name="text" id="firstName"
                  placeholder='First name'
                  onChange={addUserObj}
                />
                <p className={`sigin__form_eror-tit ${fname ? "errorNone" : "errorBlock"}`}>Length should be greater than 2</p>
                <input
                  className='sigin__form_inp'
                  type="text" name="text" id="lastName"
                  placeholder='Last name'
                  onChange={addUserObj}
                />
                <p className={`sigin__form_eror-tit ${lname ? "errorNone" : "errorBlock"}`}>Length should be greater than 2</p>
                <input
                  className='sigin__form_inp'
                  type="number" name="text" id="number"
                  placeholder='Phone'
                  onChange={addUserObj}
                />
                <p className={`sigin__form_eror-tit ${phonee ? "errorNone" : "errorBlock"}`}>The number is greater than 9</p>
                <input
                  className='sigin__form_inp'
                  type="email" name="text" id="email"
                  placeholder='Email'
                  onChange={addUserObj}
                />
                <p className={`sigin__form_eror-tit ${emaill ? "errorNone" : "errorBlock"}`}>Length should be greater than 2</p>
                <input
                  className='sigin__form_inp'
                  type="text" name="text" id="password"
                  placeholder='Password'
                  onChange={addUserObj}
                />
                <p className={`sigin__form_eror-tit ${passwordd ? "errorNone" : "errorBlock"}`}>password length should not be less than 8</p>
                <button className='sigin__form_btn'>Next step</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SiginUp
