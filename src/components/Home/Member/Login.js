import React, { useState } from 'react'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = (event) => {
        if (username === 'user' && password === 'password') {
            setIsLoggedIn(true);
          } else {
            alert('Tên đăng nhập hoặc mật khẩu không đúng.');
          }
    };

    return (
        <div>
            <div>
                <div className='pb-6 grid grid-cols-3'>
                    <label> Email : </label>
                    <input type="text"
                        placeholder='Email'
                        className='border border-solid border-current rounded-lg col-span-2 pl-4'
                        onChange={handleUsername}
                    />
                </div>
                <div className='pb-6 grid grid-cols-3'>
                    <label> Mật khẩu : </label>
                    <input type="password"
                        placeholder='Mật khẩu'
                        className='border border-solid border-current rounded-lg col-span-2 pl-4'
                        onChange={handlePassword}
                    />
                </div>
            </div>

            <div className='text-right text-blue-500 hover:underline hover:text-blue-700 '>
                <a href="#" >
                    Quên mật khẩu?
                </a>
            </div>

            <div className='text-xl font-bold text-center pt-5'>
                <button className='hover:text-blue-500' onClick={handleLogin} >
                    Đăng nhập
                </button>
            </div>
        </div>
    )
}

export default Login