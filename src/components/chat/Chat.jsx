import React from 'react'
import './chat.css';
import iconq from "../../assets/images/iconq.svg";


/// ...
export const Chat = () => {
    return (
        <div className='position-relative  h-100' >



            <div className='position-absolute top-0 start-0' style={{ height: '87px' }}>
                <div className='d-flex flex-row p-3 ' >
                    <div className='rounded-circle d-flex align-items-center justify-content-center' style={{ backgroundColor: '#454550', width: '47px', height: '47px' }}>
                        <p className='' style={{ fontSize: '18px', fontWeight: '600' }}>RG</p></div>
                    <div className='ps-2'>
                        <p className='pt-0 mt-0' style={{ fontSize: '25px', fontWeight: '400' }}>Driller chat</p>
                        <p className='pt-0 mt-0' style={{ fontSize: '15px', fontWeight: '400', color: 'var(--text-color-disable)' }}>online</p>
                    </div>


                </div>
                <div>

                </div>

            </div>

            <div className='d-flex flex-column position-absolute ' style={{
                top: '87px', bottom: '65px',
                overflowX: 'hidden', overflowY: 'scroll', background: 'var(--selected-background-color)',
            }} >

                <div className=' align-self-start    m-2 p-2 rounded' style={{
                    backgroundColor: '#F13232', fontSize: '19px', maxWidth: '75%',
                    fontWeight: '400', color: 'var(--text-color-enable-prime)', opacity: '0.8'
                }}>
                    <p style={{ color: '#E3E3E4', opacity: '.9' }}>Hey man, i need you help</p>
                    <p style={{ fontSize: '12px', fontWeight: '400', color: 'var(--text-color-enable-prime)', }}>16:46</p> </div>

                <div className='align-self-start   m-2 p-2 rounded' style={{
                    backgroundColor: '#454550', fontSize: '19px', maxWidth: '75%',
                    fontWeight: '400', color: 'var(--text-color-enable-prime)', opacity: '0.8'
                }}>
                    <p style={{ color: '#E3E3E4', opacity: '.9' }}>Symbols are available in three styles and four adjustable variable font styles</p>
                    <p style={{ fontSize: '12px', fontWeight: '400', color: 'var(--text-color-enable-prime)', }}>16:46</p> </div>

                <div className='d-flex justify-content-center align-items-center m-2' style={{ opacity: '0.8' }}>
                    <p className=' border-top mx-2' style={{  borderColor: 'var(--text-color-enable-prime)' }}></p>
                    <p style={{ fontSize: '12px', fontWeight: '400', color: 'var(--text-color-enable-prime)', }}>12 november 2022</p>
                    <p className=' border-top mx-2' style={{  borderColor: 'var(--text-color-enable-prime)' }}></p>

                </div>

                <div className='align-self-end  m-2 p-2 rounded' style={{
                    backgroundColor: '#7B7BD6', fontSize: '19px', maxWidth: '75%',
                    fontWeight: '400', color: 'var(--text-color-enable-prime)', opacity: '0.8'
                }}>
                    <p style={{ color: '#E3E3E4', opacity: '.9' }}>Hey man, i need you help</p>
                    <p style={{ fontSize: '12px', fontWeight: '400', color: 'var(--text-color-enable-prime)', }}>16:46</p> </div>

                <div className=' align-self-start   m-2 p-2 rounded' style={{
                    backgroundColor: '#F13232', fontSize: '19px', maxWidth: '75%',
                    fontWeight: '400', color: 'var(--text-color-enable-prime)', opacity: '0.8'
                }}>
                    <p style={{ color: '#E3E3E4', opacity: '.9' }}>Hey man, i need you help</p>
                    <p style={{ fontSize: '12px', fontWeight: '400', color: 'var(--text-color-enable-prime)', }}>16:46</p> </div>


                  
                <div className='d-flex rounded mx-2 bottom-0'>
                    <button className=' text-light border-0 w-50 rounded-start' style={{ background: '#22B692', height: '55px', fontSize: '23px', fontWeight: '500' }}>2 @ 180    </button>
                    <button className=' text-light border-0 w-50 rounded-end' style={{ background: '#22B692', height: '55px', fontSize: '23px', fontWeight: '500' }}>ACKNOWLEDGE</button>
                </div>

            </div>

            <div className='w-100 position-absolute bottom-0 start-0' style={{ height: '65px' }}>
                <div class="input-group p-2 mt-3">
                    <input type="text" className="form-control bg-transparent  border-0 " style={{ color: 'var(--text-color-disable)' }} placeholder="Type something..." aria-label="Recipient's chat" aria-describedby="basic-addon2" />
                    <img className='mx-3' src={iconq} alt='' />
                    <span className='border-start' style={{ borderColor: 'var(--text-color-disable)' }}></span>
                    <button className="btn  border-0 mx-2" style={{ color: '#B1B1B2' }} type="button">SEND</button>
                </div>
            </div>


        </div>
    )
}
