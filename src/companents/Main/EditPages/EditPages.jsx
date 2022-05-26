import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './EditPages.scss'

function EditPages({
  fnameVal, setFnameVal,
  lnameVal, setLnameVal,
  phoneeVal, setPhoneeVal,
  emaillVal, setEmaillVal,
  passwordVal, setPasswordVal
}) {

  const [fname, setFname] = useState(true)
  const [lname, setLname] = useState(true)
  const [phonee, setPhonee] = useState(true)
  const [emaill, setEmaill] = useState(true)

  const editInputs = (e) => {
    if (e.target.id === 'editfName') {
      setFnameVal(e.target.value)
      setFname(true)
    }
    if (e.target.id === 'editlName') {
      setLnameVal(e.target.value)
      setLname(true)
    }
    if (e.target.id === 'editnumber') {
      setPhoneeVal(e.target.value)
      setPhonee(true)
    }
    if (e.target.id === 'editEmail') {
      setEmaillVal(e.target.value)
      setEmaill(true)
    }
  }

  const subFun = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="edit">
        <div className="edit__inner">
          <div className="edit__user-img">
            <div className="edit__user-img-box">
              <img src="https://imgur.com/4rt0NVy.png" alt="img" />
              <span><i class='bx bx-camera'></i></span>
            </div>
          </div>
          <div className="edit__form-box">
            <h2 className='edit__title'>My profile</h2>
            <form className='edit__form'>
              <div className="edit__inp-box">
                <label>First Name</label>
                <input type="text" name="text" id="editfName" onChange={editInputs} value={fnameVal} />
                <p className={`edit__form-inp-tit  ${fname ? "err" : "noerr"}`}>Please enter your first name.</p>
              </div>
              <div className="edit__inp-box">
                <label>Last Name</label>
                <input type="text" name="text" id="editlName" onChange={editInputs} value={lnameVal} />
                <p className={`edit__form-inp-tit  ${fname ? "err" : "noerr"}`}>Please enter your last name.</p>
              </div>
              <div className="edit__form-two-inp">
                <div className="edit__inp-box">
                  <label>Phone</label>
                  <input type="number" name="number" id="editnumber" onChange={editInputs} value={phoneeVal} />
                  <p className={`edit__form-inp-tit  ${fname ? "err" : "noerr"}`}>Please enter your  phone number.</p>
                </div>
                <div className="edit__inp-box">
                  <label>Email</label>
                  <input type="text" name="text" id="editEmail" onChange={editInputs} value={emaillVal} />
                  <p className={`edit__form-inp-tit  ${fname ? "err" : "noerr"}`}>Please enter your email address.</p>
                </div>
              </div>

              <div className="edit__form_btn-box">
                <Link to={'/BoshSahifa'}><button className='sigin__form_btn' onSubmit={subFun}>Save Changes</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default EditPages
