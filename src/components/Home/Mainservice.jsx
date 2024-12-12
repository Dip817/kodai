import React from 'react'
import '../../assets/css/mainservice.css'
import Imgone from '../../assets/imgs/c1.png'
import Imgtwo from '../../assets/imgs/c2.png'
import Imgthree from '../../assets/imgs/c3.png'
import Bgthree from '../../assets/imgs/bgimg3.png'
import Services from './Services'
import Bgone from '../../assets/imgs/bgimg1.png'
function Mainservice() {
  return (
    <>
    <div className='bg-main' style={{backgroundColor:'black'}}>
    <div className='service-maindiv'>
    <img src={Bgone} alt=''/>
      <h1 style={{colour:'#FFFFFF'}}>OUR SERVICES</h1>
      <p style={{colour:'#FFFFFF'}}>Hire us and our experts to take your business marketing to
      a professional level. We are best in what we do.</p>
    </div>
    <div className='service-maindiv-one'>
      <p>Benefits you will get by doing business with us</p>
    </div>
    <div className='service-maindiv-two d-flex justify-content-center'>
      <div className='card-one' style={{width:'25%'}}>
      <img src={Imgone}alt='/' style={{width:'100%'}}></img>
      </div>
      <div className='card-two' style={{width:'25%'}}>
      <img src={Imgtwo}alt='/' style={{width:'100%'}}></img>
      </div>
      <div className='card-three' style={{width:'25%'}}>
      <img src={Imgthree}alt='/' style={{width:'100%'}}></img>
      </div> 
    </div>
    <div className='service-maindiv-three d-flex justify-content-center'style={{width:'100%'}}>
      <img src={Bgthree} alt='' style={{width:'100%',border:'1px solid tan'}}/>
    </div>
    <Services/>
    </div>
    </>
  )
}

export default Mainservice