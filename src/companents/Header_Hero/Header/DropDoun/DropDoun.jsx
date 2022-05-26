import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderImg from '../../../../assets/Images//avatar.png'

function DropDoun() {
  const [drop, setDrop] = useState(false)

  const dropFunc = () => {
    setDrop(!drop)
    console.log(drop);
  }

  return (
    <>
      <img className='avatar__img' src={HeaderImg} alt="img" />
      <button className='hecate__btn' onClick={dropFunc}><i className='bx bx-chevron-down'></i></button>
      <div className={`hecate__drop ${drop ? "dropblock" : "dropnone"}`}>
        <span></span>
        <ul className="hecate__drop_list">
          <Link to={"/Profile"} className="link">
            <li className="hecate__drop_item">
              <button className='hecate__drop_btn'><i class='bx bx-user-circle'></i> Profile</button>
            </li>
          </Link>
          <Link to={"/EditPages"} className="link">
            <li className="hecate__drop_item">
              <button className='hecate__drop_btn'><i class='bx bx-cog'></i> Setting</button>
            </li>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default DropDoun
