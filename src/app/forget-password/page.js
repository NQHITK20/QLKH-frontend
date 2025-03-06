import React from 'react'
import '../../style/login.css'

export default function Forgetpassword() {
  return (
    <div className='register-container'>
    <h1>Quên mật khẩu</h1>
    <div className='register-form'>
      <form>
        <div className='form-group'>
          <label htmlFor='email'>Nhập email của bạn</label>
          <input type='email' id='email' name='email' placeholder='Email' />
        </div>
        <div className='submit-button'>
          Xác nhận
        </div>
      </form>
    </div>
</div>
  )
}
