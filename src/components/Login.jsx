import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm , setIsSignInForm] = useState(true);

  const handlerCheck = ()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div className='login-container'>

          
          {/* <Header/> */}
          {/* <div className='header-container'>
            <img className='logo' alt='logo' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'/>

          </div> */}
          <div className='bg-image-login'>
          
               <img className='bg-logo' alt='bg-image' src='https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg'/>
          </div>
          <Header/>
          <div className='login-form'>
            <form action="" className='form-tag'>

              <div className='signIn-top'>
                <span>{isSignInForm ? "Sign In" : "Sign Up"}</span>
              </div>

              { !isSignInForm &&
                <div className='email-input'>
                  <input type='text' placeholder='Enter your Full name'/>
                </div>
              }
                  
              
              <div className='email-input'>
                <input type='text' placeholder='Enter your email'/>
              </div>
              <div className='pass-input'>
                <input type='password' placeholder='Enter the password'/>

              </div>
              <button className='sign-btn'>{isSignInForm ? "Sign In" : "Sign Up" }</button>
              <div className='ask' onClick={handlerCheck}>
                <span>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already register ? Sign In Now" } </span>
              </div>
              
            </form>
          </div>
          

    </div>
  )
}

export default Login


