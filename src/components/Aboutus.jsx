import React from 'react'
import '../assets/css/aboutus.css'
function Aboutus() {
    return (
        <>
            {/* main div */}
            <div className='aboutus-first-main d-flex justify-content-center' style={{ background: 'linear-gradient(to top,#0000001A,#1E1E1E80,#004C4C' }}>
                <h2>ABOUT US</h2>
            </div>
            <hr></hr>
            <div className='aboutus-second-main d-flex flex-column justify-content-center'>
                <h2 className='d-flex justify-content-center'>WHO ARE WE?</h2>
                <p className='d-flex justify-content-center' style={{ width: '80%',paddingLeft:'18%'}}>We're passionate about revolutionizing businesses with
                    innovative digital solutions that inspire growth and
                    engagement. With our creative flair and fresh perspectives,
                    we redefine how companies connect and thrive online
                    whether it's developing dynamic websites, designing
                    captivating branding, or optimizing digital marketing
                    strategies, we bring enthusiasm and expertise to every project.
                </p></div>
            <div className='aboutus-third-main'>
                <div className='aboutus-button-one d-flex align-items-center justify-content-center'>
                    <a href="/">Learn more</a>
                </div>              
            </div>
            <div className='aboutus-button-two d-flex align-items-center justify-content-center'>
                    <a href="/">Request a call from us!</a>
                </div>
        </>
    )
}

export default Aboutus