import React from 'react'
import './Header.css'
import settings from '../../assets/images/settings.svg'
import union1 from '../../assets/images/Union 1.svg'
export const Header = () => {
  return (
    <div className='d-flex align-items-center justify-content-between'>
      <div>
        <div className='d-flex align-items-center justify-content-between '>
          <p className=" mx-2 pe-2 text-center border-end" style={{ fontSize: '20px',fontWeight:'400', color: '#E3E3E4',borederColor:'#E3E3E4' }} >February 3, 11:10 </p>
          <img className='mx-2' src={union1}></img>
          <span className="badge m-2 p-1" style={{ fontSize: '16px', backgroundColor: '#7B7BD6' }}>+99</span>
        </div>
      </div>
      <div className='d-flex m-2 '>
        <div className='d-flex align-items-center justify-content-between'>
        <span className="badge m-2 p-1" style={{ fontSize: '16px', backgroundColor: '#7B7BD6' }}>+1</span>
          <img className='mx-2' src={union1}></img>
         
        </div>
        <div className=' mx-3 d-flex flex-column justify-content-center ' >
          <p className=" px-2 border-start" style={{ color: 'var(--text-color-enable)' }}>RIG STATE</p>
          <p className=" px-2  fw-bold text-center  border-start" style={{ fontSize: '23px',
           fontWeight: '600' ,color: '#E3E3E4',borederColor:'#E3E3E4'}}>Rotate circulating</p>
        </div>
        <div className=' mx-3 d-flex flex-column justify-content-center  ' >
          <p className="px-2 border-start border-end" style={{ color: 'var(--text-color-enable)' }}>RIG ACTIVUTY</p>
          <p className="px-2  fw-bold text-center  border-start border-end" style={{ fontSize: '23px',
          fontWeight: '600',color: '#E3E3E4',borederColor:'#E3E3E4'  }}>Casing running</p>
        </div>

        <div className=' px-2 d-flex flex-column justify-content-center  '>
          <img className=' mx-2' src={settings}></img>
        </div>

      </div>
    </div>
  )
}


