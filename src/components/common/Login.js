import React, { useState } from 'react'
import Pages from '../Pages';
import { useAtom } from 'jotai';
import { loginAtom } from '../../store/Login.atom'
import MovieSearch from '../Header/MovieSearch';

function Login() {
    const database = [
        {
            username: "1",
            password: "1"
        },
        {
            username: "1",
            password: "2"
        }
    ]

    const [isLoggedIn, setIsLoggedIn] = useAtom(loginAtom)
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleUsername = (event) => {
        setUsername(event.target.value);
        setError('');       // Xóa thông báo lỗi khi người dùng thay đổi tên đăng nhập
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
        setError('');
    }

    const handleLogin = (event) => {
        const user = database.find((user) => user.username === username && user.password === password);

        if (user) {
            setIsLoggedIn(true);
        } else {
            setError('Tên đăng nhập hoặc mật khẩu không đúng.');
        }
    };

    return (
        <div>
            {isLoggedIn ? (
                <div className="text-xl font-bold text-center pt-3">
                    <Pages />
                </div>
            ) : (
                <div>
                    <MovieSearch />
                    <div className='m-[150px] bg-[#f0fdf4]'>
                        <div className='border border-solid border-black rounded-md p-8 '>
                            <div className='pb-6 grid grid-cols-3'>
                                <label> Email : </label>
                                <input type="text" className='border border-solid border-current rounded-lg col-span-2 pl-4'
                                    placeholder='Email'
                                    onChange={handleUsername}
                                />
                            </div>
                            <div className='pb-6 grid grid-cols-3'>
                                <label> Mật khẩu : </label>
                                <input type="password" className='border border-solid border-current rounded-lg col-span-2 pl-4'
                                    placeholder='Mật khẩu'
                                    onChange={handlePassword}
                                />
                            </div>

                            <div className='text-xl font-bold text-center pt-5'>
                                <button className='hover:text-blue-500' onClick={handleLogin}>
                                    Đăng nhập
                                </button>
                            </div>

                            {error && (
                                <div className="text-red-500 text-center pt-3">
                                    {error}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Login
