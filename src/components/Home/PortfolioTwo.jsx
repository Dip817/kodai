import React from 'react'
import '../../assets/css/portfoliotwo.css'
import { Link } from 'react-router-dom'
import imgone from '../../assets/imgs/bgimg1.png'
function PortfolioTwo() {
  return (
    <>
      <div className='pt-5' style={{ backgroundColor: 'black' }}>
        <div className='portfoliotwo-head d-flex justify-content-center flex-column align-items-center'>
          <p style={{ color: '#0D4C78' }}>Launch Your Website for Just Rs. 999!</p>
          <p style={{ color: '#FFFFFF' }}>We will help you get started with your account marketplace
            registration.</p>
        </div>
        <div className='portfoliotwo-card-sectone d-flex justify-content-around flex-wrap'>
          <div className='col-lg-4 col-md-4 col-sn-12'>
            <Link to='/'>
              <img src={imgone} alt='' />
            </Link>
          </div>
          <div className='col-lg-4 col-md-4 col-sn-12'>
            <Link to='/'>
              <img src={imgone} alt='' />
            </Link>
          </div>
          <div className='col-lg-4 col-md-4 col-sn-12'>
            <Link to='/'>
              <img src={imgone} alt='' />
            </Link>
          </div>
        </div>
        <div className='portfoliotwo-card-sectwo d-flex justify-content-around'>
          <div className='col-lg-4 col-md-4 col-sn-12'>
            <Link to='/'>
              <img src={imgone} alt='' />
            </Link>
          </div>
          <div className='col-lg-4 col-md-4 col-sn-12'>
            <Link to='/'>
              <img src={imgone} alt='' />
            </Link>
          </div>
          <div className='col-lg-4 col-md-4 col-sn-12'>
            <Link to='/'>
              <img src={imgone} alt='' />
            </Link>
          </div>
        </div>
        <div className='portfolio-button mt-5  d-flex justify-content-center'>
          <Link className='' to='/' style={{ textDecoration: 'none', color: 'white', border: '1px solid #004C4C', padding: '5px 30px 5px 30px', backgroundColor: 'black', borderRadius: '5px' }}>Check Now</Link>
        </div>
      </div>
    </>
  )
}

export default PortfolioTwo