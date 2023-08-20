import React from 'react'
import './Header.css'
import settings from '../../assets/images/settings.svg'
import union from '../../assets/images/Union.svg'
import union1 from '../../assets/images/Union 1.svg'
export const Header = () => {
  return (
    <div className='d-flex align-items-center justify-content-between'>
      <div>
        <div className='d-flex align-items-center justify-content-between'>
          <p className="p-3 m-2  text-center border-end" style={{ fontSize: '18px' }} >February 3, 11:10 </p>
          <img src={union1}></img>
          <span className="badge m-2 p-2" style={{ fontSize: '18px', backgroundColor: '#7B7BD6' }}>+99</span>
        </div>
      </div>
      <div className='d-flex m-2 '>
        <div className='d-flex align-items-center justify-content-between'>
          <img src={union1}></img>
          <span className="badge m-2 p-2" style={{ fontSize: '18px', backgroundColor: '#7B7BD6' }}>+1</span>
        </div>
        <div className=' d-flex flex-column justify-content-center  border-start' >
          <p className="mx-3" style={{ color: 'var(--text-color-enable)' }}>RIG STATE</p>
          <p className="mx-3 fw-bold text-center" style={{ fontSize: '23px', }}>Rotate circulating</p>
        </div>
        <div className=' d-flex flex-column justify-content-center  border-start' >
          <p className="mx-3" style={{ color: 'var(--text-color-enable)' }}>RIG STATE</p>
          <p className="mx-3 fw-bold text-center" style={{ fontSize: '23px', }}>Rotate circulating</p>
        </div>

        <div className=' p-3 d-flex flex-column justify-content-center  border-start'>
          <img src={settings}></img>
        </div>

      </div>
    </div>
  )
}


