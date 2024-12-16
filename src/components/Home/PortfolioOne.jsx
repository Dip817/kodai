import React from 'react'
import '../../assets/css/portfolioOne.css'
import { Link } from 'react-router-dom'
import cardoneimg from '../../assets/imgs/bgimg1.png'

function Portfolio() {
  return (
    <>
      <div className='portfolio-main'>
        <div className='portfolio-main-head d-flex justify-content-center flex-column align-items-center'>
          <p style={{ color: '#0D4C78' }}>Launch Your Website for Just Rs. 999!</p>
          <p style={{ color: '#FFFFFF' }}>We will help you get started with your account marketplace
            registration.</p>
        </div>
        <div className='portfolio-main-card row d-flex justify-content-around'>
          <div className='col-lg-4 col-md-4 col-sn-12'>
            <Link to='/'>
              <img src={cardoneimg} alt='' />
            </Link>
          </div>
          <div className='col-lg-4 col-md-4 col-sn-12'>
            <Link to='/'>
              <img src={cardoneimg} alt='' />
            </Link>
          </div>
          <div className='col-lg-4 col-md-4 col-sn-12'>
            <Link to='/'>
              <img src={cardoneimg} alt='' />
            </Link>
          </div>
        </div>
        <div classname='portfolio-main-button' style={{marginTop:'3%',display:'flex',justifyContent:'center'}}>
          <Link className='' to='/' style={{ textDecoration: 'none', color: 'white', border: '1px solid #004C4C', padding: '2px 15px 2px 15px', backgroundColor: 'black', borderRadius: '5px',alignItems:'center',textAlign:'center' }}>Check Now</Link>
        </div>
      </div>

    </>
  )
}

export default Portfolio