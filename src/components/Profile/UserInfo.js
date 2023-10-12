import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { userAtom } from '../../store/user.atom'
import { Avatar } from '@mui/material';
import axios from 'axios';

function UserInfo() {

    const [user, setUser] = useAtom(userAtom)

    const [fullNameState, setFullNameState] = useState(user?.fullName);
    const [emailState, setEmailState] = useState(user?.email);
    const [phoneState, setPhoneState] = useState(user?.phone);
    const [birthdateState, setBirthdateState] = useState(user?.birthdate);
    const [genderState, setGenderState] = useState(user?.gender);

    const validateEmail = (email) => {
        if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            return 'Email không hợp lệ.';
        }
    }

    const validatePhone = (phone) => {
        if (!phone || !/^\d+$/.test(phone)) {
            return 'Vui lòng nhập số điện thoại hợp lệ.';
        }
    }

    const validateBirthdate = (birthdate) => {
        if (!birthdate || !/^\d{4}-\d{2}-\d{2}$/.test(birthdate)) {
            return 'Vui lòng sử dụng định dạng YYYY-MM-DD.';
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault()

        const emailError = validateEmail(emailState);
        const phoneError = validatePhone(phoneState);
        const birthdateError = validateBirthdate(birthdateState);

        if (emailError || phoneError || birthdateError) {
            console.error(
            `Vui lòng sửa các lỗi sau:\n
            ${emailError ? '-' + emailError + '\n' : ''}
            ${phoneError ? '-' + phoneError + '\n' : ''}
            ${birthdateError ? '- ' + birthdateError : ''}`
            );
            return;
        }

        const updatedUser = {
            fullName: fullNameState,
            email: emailState,
            phone: phoneState,
            birthdate: birthdateState,
            gender: genderState,
        }

        console.log('Thông tin mới:', updatedUser)

        try {
            const response = await axios.post(`/update/${user.user_id}`, updatedUser);

            // Cập nhật atom userAtom với dữ liệu phản hồi từ API
            setUser(response.data);
            console.log('Cập nhật thành công', response.data);
        }
        catch (e) {
            console.error('Lỗi khi cập nhật thông tin:', e);
        }

    }

    return (
        <div className='flex border border-solid border-gray-200 rounded-md h-[500px]'>

            <div className=' bg-emerald-50 w-[300px] text-center pt-[80px]'>
                <Avatar src="/broken-image.jpg" sx={{ width: '80px', height: '80px', margin: 'auto', }} />
                <div className='mt-4 '> {user?.email} </div>
            </div>

            <div className='m-auto '>
                <h2 className='font-bold pb-6 '> CẬP NHẬT THÔNG TIN  </h2>

                <div className='m-auto bg-[#f0fdf4] border border-solid border-black rounded-md p-8 md:min-w-[450px]'>
                    <form className='max-h-[500px]'>
                        <div className='pb-6 grid grid-cols-3'>
                            <label htmlFor="fullName"> Họ tên :</label>
                            <input type="text" name="fullName" id="fullName" required
                                className='border border-solid border-current rounded-lg col-span-2 pl-4'
                                value={fullNameState}
                                onChange={(e) => setFullNameState(e.target.value)}
                            />
                        </div>
                        <div className='pb-6 grid grid-cols-3'>
                            <label htmlFor="email"> Email :</label>
                            <input type="text" name="email" id="email" required
                                className='border border-solid border-current rounded-lg col-span-2 pl-4'
                                value={emailState}
                                onChange={(e) => setEmailState(e.target.value)}
                            />
                        </div>
                        <div className='pb-6 grid grid-cols-3'>
                            <label htmlFor="phone"> Số điện thoại :</label>
                            <input type="text" name="phone" id="phone" required
                                className='border border-solid border-current rounded-lg col-span-2 pl-4'
                                value={phoneState}
                                onChange={(e) => setPhoneState(e.target.value)}
                            />
                        </div>
                        <div className='pb-6 grid grid-cols-3'>
                            <label htmlFor="birthdate"> Ngày sinh :</label>
                            <input type="text" name="birthdate" id="birthdate" required
                                className='border border-solid border-current rounded-lg col-span-2 pl-4'
                                value={birthdateState}
                                onChange={(e) => setBirthdateState(e.target.value)}
                            />
                        </div>
                        <div className='pb-6 grid grid-cols-3'>
                            <label htmlFor="gender"> Giới tính :</label>
                            <select name="gender" id="gender" required
                                className='border border-solid border-current rounded-lg col-span-2 pl-4'
                                value={genderState}
                                onChange={(e) => setGenderState(e.target.value)}
                            >
                                <option value="male">   Nam  </option>
                                <option value="female"> Nữ   </option>
                                <option value="other">  Khác </option>
                            </select>
                        </div>

                        <div onClick={handleUpdate} className='text-xl font-bold text-center pt-5 text-cyan-500 '>
                            <button type="submit" className='hover:text-blue-500'> Cập nhật </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserInfo