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
                    <a href="">Learn more</a>
                </div>
                <div className='aboutus-img-txt-one d-flex flex-column align-items-center mt-5'>
                    <h4 style={{ color: '#FFFFFF' }}>Our Promise</h4>
                    <p style={{ color: '#FFFFFF' }}>We promise to be your trusted partner in navigating the digital landscape, empowering your business with smart, personalized solutions that not only meet today’s challenges but also lay a strong foundation for your future success.</p>
                </div>
                <div className='aboutus-img-txt-two d-flex flex-column align-items-center'>
                    <h4 style={{ color: '#FFFFFF' }}>Our Dream</h4>
                    <p style={{ color: '#FFFFFF' }}>We envision a future where businesses flourish in the digital age, driven by innovative strategies and solutions that create pathways to lasting success and prosperity.</p>
                </div>
                <div className='aboutus-button-three d-flex align-items-center justify-content-center' style={{marginTop:'0px'}}>
                    <a href="">Know more</a>
                </div>
            </div>
            <div className='aboutus-button-two d-flex align-items-center justify-content-center'>
                    <a href="">Request a call from us!</a>
                </div>

        </>
    )
}

export default Aboutus