import React from 'react'
import Imx from '../Assets/830561.jpg'
import { useState } from 'react'
function Login() {
  const [account, toggleaccount] = useState('login')
  const toggle = () => {
    account === 'signup' ? toggleaccount('login') : toggleaccount('signup')
  }
  return (
    <div>
      <div className='lgfrm'>
        <img className='imx' src={Imx} alt='Img' srcset='' />
        <label className='txx'>BlogX</label>
        {account === 'login' ? (
          <div className='frm'>
            <div className='fields'>
              <input className='ix' placeholder='username' type='text' />
              <input className='ix' type='password' placeholder='password' />
            </div>
            <button className='btx'>Login</button>
            <label className='or'>OR</label>
            <button className='su' onClick={() => toggle()}>
              SignUp ??
            </button>
          </div>
        ) : (
          <div className='frm'>
            <div className='fields'>
              <input className='ix' placeholder='name' type='text' />
              <input className='ix' placeholder='username' type='text' />
              <input className='ix' type='password' placeholder='password' />
            </div>
            <button className='btx'>Create Account</button>
            <label className='or'>OR</label>
            <button className='su' onClick={() => toggle()}>
              Signin?
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
