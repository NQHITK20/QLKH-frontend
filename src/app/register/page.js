import React from 'react'
import '../../style/register.css'
import Link from 'next/link'

export default function Register() {
  return (
    <div className='login-container'>
        <h1>Đăng ký</h1>
        <div className='login-form'>
          <form>
            <div className='form-group'>
              <label htmlFor='fullname'>HỌ VÀ TÊN</label>
              <input type='text' id='fullname' name='fullname' placeholder='Nguyễn Văn A' />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>EMAIL</label>
              <input type='email' id='email' name='email' placeholder='Email' />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>MẬT KHẨU</label>
              <input type='password' id='password' name='password' placeholder='Password' />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>NHẬP LẠI MẬT KHẨU</label>
              <input type='password' id='confirmpassword' name='confirmpassword' placeholder='Password' />
            </div>
            <div className='submit-button'>
              Đăng ký
            </div>
            <div className='login-link'>
              Đã có tài khoản? <Link className='login-text' href='/login'>Đăng nhập ở đây</Link>
            </div>
          </form>
        </div>
    </div>
  )
}
