import React from 'react'
import '../../style/login.css'
import Link from 'next/link'

export default function Login() {
  return (
    <div className='register-container'>
        <h1>Đăng nhập</h1>
        <div className='register-form'>
          <form>
            <div className='form-group'>
              <label htmlFor='email'>EMAIL</label>
              <input type='email' id='email' name='email' placeholder='Email' />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>MẬT KHẨU</label>
              <input type='password' id='password' name='password' placeholder='Password' />
            </div>
            <div className='checkbox'>
              <label>
                <input type='checkbox' name='remember' /> Ghi nhớ
              </label>
              <label className='forgot-password'><a href='/forget-password'>Quên mật khẩu?</a></label>
            </div>
            <div className='submit-button'>
              Đăng nhập
            </div>
            <div className='register-link'>
              Chưa có tài khoản? <Link className='register-text' href='/register'>Đăng ký ở đây</Link>
            </div>
          </form>
        </div>
    </div>
  )
}
