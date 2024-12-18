import React from 'react'
import '../assets/css/form.css'
function Form() {
  return (
    <>
      <div className='form-main d-flex' style={{ backgroundColor: 'black' }}>
        <div style={{ width: '65%' }}>
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
        </div>
        <div style={{ width: '35%', marginRight: '10%' }}>
          <div className='' style={{ position: 'relative', border: '2px solid black', right: '35%', width: '400px', height: '400px' }}>
         <div className='squarebox d-flex'> 
         <div className='squarebox-inner'>
            <div></div>
            <div style={{border:'1px solid white',width:'100%',height:'100%'}}></div>
          </div>
          <div className='squarebox-inner' >
            <div></div>
            <div style={{border:'1px solid white',width:'100%',height:'100%'}}></div>
          </div>
          <div className='squarebox-inner'>
            <div></div>
            <div style={{border:'1px solid white',width:'100%',height:'100%'}}></div>
          </div>
          <div className='squarebox-inner'>
            <div></div>
            <div></div>
          </div>
          </div>
          <div className='squarebox d-flex'> 
         <div className='squarebox-inner'>
            <div></div>
            <div></div>
          </div>
          <div className='squarebox-inner'>
            <div></div>
            <div></div>
          </div>
          <div className='squarebox-inner'>
            <div className='window-l' style={{backgroundColor:'white'}}></div>
            <div></div>
          </div>
          <div className='squarebox-inner'>
            <div></div>
            <div></div>
          </div>
          </div>
          <div className='squarebox d-flex'> 
         <div className='squarebox-inner' >
            <div></div>
            <div></div>
          </div>
          <div className='squarebox-inner'>
            <div></div>
            <div></div>
          </div>
          <div className='squarebox-inner'>
            <div></div>
            <div></div>
          </div>
          <div className='squarebox-inner'>
            <div></div>
            <div></div>
          </div>
          </div>        
          </div>
          <div className='' style={{ position: 'absolute', border: '2px solid black', top: '36.7%', left: '59.2%', width: '400px', height: '400px', backgroundColor: 'black' }}>
          <div className='squarebox d-flex'> 
         <div className='squarebox-inner'>
            <div></div>
            <div style={{border:'1px solid white',width:'100%',height:'100%'}}></div>
          </div>
          <div className='squarebox-inner' >
            <div></div>
            <div style={{border:'1px solid white',width:'100%',height:'100%'}}></div>
          </div>
          <div className='squarebox-inner'>
            <div></div>
            <div style={{border:'1px solid white',width:'100%',height:'100%'}}></div>
          </div>
          <div className='squarebox-inner'>
            <div></div>
            <div></div>
          </div>
          </div>
          <div className='squarebox d-flex'> 
         <div className='squarebox-inner'>
            <div></div>
            <div></div>
          </div>
          <div className='squarebox-inner'>
            <div className='window-r' style={{backgroundColor:'white'}}></div>
            <div></div>
          </div>
          <div className='squarebox-inner'>
            <div></div>
            <div></div>
          </div>
          <div className='squarebox-inner'>
            <div></div>
            <div></div>
          </div>
          </div>
          <div className='squarebox d-flex'> 
         <div className='squarebox-inner' >
            <div></div>
            <div></div>
          </div>
          <div className='squarebox-inner'>
            <div></div>
            <div></div>
          </div>
          <div className='squarebox-inner'>
            <div></div>
            <div></div>
          </div>
          <div className='squarebox-inner'>
            <div></div>
            <div></div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form