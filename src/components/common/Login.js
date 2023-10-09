import React, { useState } from 'react';
import { useAtom } from 'jotai';
import MovieSearch from '../Header/MovieSearch';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase Authentication functions
import Pages from '../Pages';
import { auth } from '../../firebaseConfig';
import { userAtom } from '../../store/user.atom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [user, setUser] = useAtom(userAtom)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // sử dụng firebase 
    // const [username, setUsername] = useState('');
    // const handleLogin = async (event) => {
    //     event.preventDefault();

    //     try {
    //         // Sử dụng hàm signInWithEmailAndPassword để đăng nhập với email và mật khẩu
    //         const user = await signInWithEmailAndPassword(auth, username, password);
    //         setUser(user);
    //     } catch (error) {
    //         // Xử lý lỗi từ Firebase và hiển thị thông báo lỗi tương ứng
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.error("Lỗi đăng nhập:", errorCode, errorMessage);
    //     }
    // }


    /* sử dụng API với async await */
    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://bach-users-api.onrender.com/login', { email, password })

            const userData = response.data;
            setUser(userData);
        } catch (error) {
            console.error('Lỗi đăng nhập:', error);
        }
    }


    return (
        <div>
            {user ? (
                <div>
                    <Pages />
                </div>
            ) : (
                <div>
                    <MovieSearch />
                    <div className=' mt-[20vh] m-auto bg-[#f0fdf4] w-[600px] '>
                        <div className='border border-solid border-black rounded-md p-8 '>
                            <form onSubmit={handleLogin}>
                                <div className='pb-6 grid grid-cols-3 '>
                                    <label> Email : </label>
                                    <input
                                        type="text"
                                        className='border border-solid border-current rounded-lg col-span-2 pl-4'
                                        placeholder='Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className='pb-6 grid grid-cols-3'>
                                    <label> Mật khẩu : </label>
                                    <input
                                        type="password"
                                        className='border border-solid border-current rounded-lg col-span-2 pl-4'
                                        placeholder='Mật khẩu'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className='text-xl font-bold text-center pt-5'>
                                    <button className='hover:text-blue-500' type="submit">
                                        Đăng nhập
                                    </button>
                                </div>

                                <p className='text-center pt-6 '>
                                    Bạn chưa có tài khoản, <Link to="/register" className='underline hover:text-cyan-600 font-medium'> ĐĂNG KÝ NGAY </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
