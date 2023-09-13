import React from 'react'
import MovieSearch from '../Header/MovieSearch'

function Register() {
    return (
        <div>
            <MovieSearch />

            <div className='m-[150px] bg-[#f0fdf4] border border-solid border-black rounded-md p-8'>
                <div>
                    <div className='pb-6 grid grid-cols-3'>
                        <label> Họ tên : </label>
                        <input type="text" placeholder='VD: Huong ...' className='border border-solid border-current rounded-lg col-span-2 pl-4' />
                    </div>
                    <div className='pb-6 grid grid-cols-3'>
                        <label> Mật khẩu : </label>
                        <input type="password" placeholder='Mật khẩu' className='border border-solid border-current rounded-lg col-span-2 pl-4' />
                    </div>
                    <div className='pb-6 grid grid-cols-3'>
                        <label> Nhập lại mật khẩu : </label>
                        <input type="password" placeholder='Nhập lại mật khẩu' className='border border-solid border-current rounded-lg col-span-2 pl-4' />
                    </div>
                    <div className='pb-6 grid grid-cols-3'>
                        <label> Ngày sinh : </label>
                        <input type="password" placeholder='VD : 02/02/2010' className='border border-solid border-current rounded-lg col-span-2 pl-4' />
                    </div>
                    <div className='pb-6 grid grid-cols-3'>
                        <label> Số điện thoại : </label>
                        <input type="password" placeholder='0937176888' className='border border-solid border-current rounded-lg col-span-2 pl-4' />
                    </div>
                </div>

                <div className='text-xl font-bold text-center pt-5 text-cyan-500 '>
                    <button className='hover:text-blue-500'> Đăng ký </button>
                </div>
            </div>
        </div>
    )
}

export default Register
