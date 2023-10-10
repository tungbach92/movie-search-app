import { useAtom } from 'jotai'
import React from 'react'
import { userAtom } from '../../store/user.atom'
import { Avatar } from '@mui/material';

function UserInfo() {

    const [user] = useAtom(userAtom)
    console.log(user);

    const { fullName, email, gender, birthdate, phone } = user;

    return (
        <div className='flex border border-solid border-gray-200 rounded-md h-[500px]'>

            <div className=' bg-emerald-50 w-[300px] text-center pt-[80px]'>
                <Avatar src="/broken-image.jpg" sx={{ width: '80px', height: '80px', margin: 'auto', }} />
                <div className='mt-4 '> {email} </div>
            </div>

            <div className='m-auto '>
                <h2 className='font-bold pb-6 '> CẬP NHẬT THÔNG TIN  </h2>

                <div className='m-auto bg-[#f0fdf4] border border-solid border-black rounded-md p-8'>
                    <form className='max-h-[500px]'>
                        <div>
                            <div className='pb-6 grid grid-cols-3'>
                                <label htmlFor="fullName"> Họ tên :</label>
                                <input type="text" name="fullName" id="fullName" required
                                    placeholder='VD: Huong ...'
                                    className='border border-solid border-current rounded-lg col-span-2 pl-4'
                                    value={fullName}
                                />
                            </div>
                            <div className='pb-6 grid grid-cols-3'>
                                <label htmlFor="email"> Email :</label>
                                <input type="text" name="email" id="email" required
                                    placeholder='huongmai17@gmail.com'
                                    className='border border-solid border-current rounded-lg col-span-2 pl-4'
                                    value={email}
                                />
                            </div>
                        </div>
                        <div className='pb-6 grid grid-cols-3'>
                            <label htmlFor="phone"> Số điện thoại :</label>
                            <input type="text" name="phone" id="phone" required
                                placeholder='0586311225'
                                className='border border-solid border-current rounded-lg col-span-2 pl-4'
                                value={phone}
                            />
                        </div>
                        <div className='pb-6 grid grid-cols-3'>
                            <label htmlFor="birthdate"> Ngày sinh :</label>
                            <input type="text" name="birthdate" id="birthdate" required
                                placeholder='VD : 2023-09-21'
                                className='border border-solid border-current rounded-lg col-span-2 pl-4'
                                value={birthdate}
                            />
                        </div>
                        <div className='pb-6 grid grid-cols-3'>
                            <label htmlFor="gender"> Giới tính :</label>
                            <select name="gender" id="gender" required
                                className='border border-solid border-current rounded-lg col-span-2 pl-4'
                                value={gender}
                            >
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                                <option value="other">Khác</option>
                            </select>
                        </div>

                        <div onClick={'handleRegister'} className='text-xl font-bold text-center pt-5 text-cyan-500 '>
                            <button type="submit" className='hover:text-blue-500'> Cập nhật </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserInfo