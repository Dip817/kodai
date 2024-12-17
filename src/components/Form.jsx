import React from 'react'
import '../assets/css/form.css'
function Form() {
  return (
    <>
      <div className='form-main' style={{ backgroundColor: 'black' }}>
        <div className='form-input'>
          <p style={{ marginBottom: '0' }}>Need A Customized Plan?</p>
          <p> Share you details to get a call back from us</p>
        </div>
        <div class='form-container'>
          <form className='form d-flex flex-column' style={{ width: '60%', paddingLeft: '10%' }}>
            <label style={{ color: '#FFFFFF' }}>Your name</label>
            <input type="text" id="name" name="name" required style={{ backgroundColor: 'transparent', border: 'none' }}></input>

            <label style={{ color: '#FFFFFF' }}>Your email</label>
            <input type="email" id="email" name="email" required style={{ backgroundColor: 'transparent', border: 'none' }}></input>

            <label style={{ color: '#FFFFFF' }}>Your phone number</label>
            <input type="tel" id="phone" name="phone" required style={{ backgroundColor: 'transparent', border: 'none' }}></input>
          </form>
        </div>
        <div className=''style={{position:'relative',border:'1px solid pink',padding:'10%',width:'50%'}}>abc</div>
        <div className=''style={{position:'absolute',border:'1px solid pink',top:'75%',left:'20%',padding:'10%'}}>def</div>
      </div>
    </>
  )
}

export default Form