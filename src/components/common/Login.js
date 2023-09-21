import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { loginAtom } from '../../store/Login.atom';
import MovieSearch from '../Header/MovieSearch';

// Import Firebase Authentication functions
import { signInWithEmailAndPassword } from 'firebase/auth';
import Pages from '../Pages';
import { auth } from '../../firebaseConfig';
import { userAtom } from '../../store/user.atom';

function Login() {
    const [user, setUser] = useAtom(userAtom)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            // Sử dụng hàm signInWithEmailAndPassword để đăng nhập với email và mật khẩu
            const user = await signInWithEmailAndPassword(auth, username, password);
            setUser(user);
        } catch (error) {
            // Xử lý lỗi từ Firebase và hiển thị thông báo lỗi tương ứng
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Lỗi đăng nhập:", errorCode, errorMessage);
        }
    };

    return (
        <div>
            {user ? (
                <div>
                    <Pages />
                </div>
            ) : (
                <div>
                    <MovieSearch />
                    <div className='m-[150px] bg-[#f0fdf4]'>
                        <div className='border border-solid border-black rounded-md p-8 '>
                            <form onSubmit={handleLogin}>
                                <div className='pb-6 grid grid-cols-3'>
                                    <label> Email : </label>
                                    <input
                                        type="text"
                                        className='border border-solid border-current rounded-lg col-span-2 pl-4'
                                        placeholder='Email'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
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
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
