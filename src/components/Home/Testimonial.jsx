import React from 'react'
import '../../assets/css/reviews.css'
import imgOne from '../../assets/imgs/img-one.webp'

function Testimonial() {
  return (
    <>
      <div className='testimonial-main text-light container'>
        {/* first div */}
        <div className='testimonial-inner-one my-4'>
          <h1>Reviews</h1>
          <p>Our Clients Qoute</p>
        </div>
        {/* second div */}
        <div className='testimonial-inner-two d-flex justify-content-around my-4'>
          <div className='card-div'>
            <img src={imgOne} alt='' />
          </div>
          <div className='card-div'>
            <img src='' alt='' />
          </div>
          <div className='card-div'>
            <img src='' alt='' />
          </div>
          <div className='card-div'>
            <img src='' alt='' />
          </div>
        </div>
      </div>
      {/* third div */}
      <div className='d-flex justify-content-around my-4 text-light'>
        <div className='reviews-div'>
          <h3>Quote</h3>
          <div className='reviews-div-inner d-flex'>
            <img src='' alt='' />
            <div className='reviews-div-inner-text'>
              <h5>Title</h5>
              <p>Description</p>
            </div>
          </div>
        </div>
        <div className='reviews-div'>
          <h3>Quote</h3>
          <div className='reviews-div-inner d-flex'>
            <img src='' alt='' />
            <div className='reviews-div-inner-text'>
              <h5>Title</h5>
              <p>Description</p>
            </div>
          </div>
        </div>
        <div className='reviews-div'>
          <h3>Quote</h3>
          <div className='reviews-div-inner d-flex'>
            <img src='' alt='' />
            <div className='reviews-div-inner-text'>
              <h5>Title</h5>
              <p>Description</p>
            </div>
          </div>
        </div>
        <div className='reviews-div'>
          <h3>Quote</h3>
          <div className='reviews-div-inner d-flex'>
            <img src='' alt='' />
            <div className='reviews-div-inner-text'>
              <h5>Title</h5>
              <p>Description</p>
            </div>
          </div>
        </div>
      </div>
      {/* fourth div */}
      <div className='testimonial-fourth-div d-flex justify-content-around my-4 text-light'>
        <div className='reviews-div-inner-w-one d-flex '>
          <div className='reviews-div-q'>
            <h3>Quote</h3>
            <img src='' alt='' />
            <div className='reviews-div-inner-text-one'>
              <h5>Title</h5>
              <p>Description</p>
            </div></div>
        </div>
        <div className='reviews-div-inner-w-two d-flex'>
          <div className='reviews-div-q'>
            <h3>Quote</h3>
            <img src='' alt='' />
            <div className='reviews-div-inner-text-two'>
              <h5>Title</h5>
              <p>Description</p>
            </div>
          </div></div>
      </div>
    </>
  )
}

export default Testimonial