import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { userAtom } from '../../store/user.atom'
import { Avatar } from '@mui/material';

function UserInfo() {

    const [user, setUser] = useAtom(userAtom)
    console.log(user);

    // const { email } = user;

    const [fullNameState, setFullNameState] = useState(user?.fullName);
    const [phoneState, setPhoneState] = useState(user?.phone);
    const [birthdateState, setBirthdateState] = useState(user?.birthdate);
    const [genderState, setGenderState] = useState(user?.gender);

    /*
    const handleUpdate = async (event) => {
        event.preventDefault();

        try {
            // Gửi yêu cầu cập nhật thông tin lên máy chủ hoặc API
            const response = await axios.post('https://your-api-url/update-profile', { fullName, phoneNumber, gender, birthdate });

            // Kiểm tra xem cập nhật thành công hay không dựa trên phản hồi từ máy chủ/API
            if (response.status === 200) {
                // Cập nhật thành công
                console.log('Thông tin đã được cập nhật thành công');
            } else {
                // Xử lý lỗi hoặc hiển thị thông báo lỗi
                console.error('Lỗi khi cập nhật thông tin');
            }
        } catch (error) {
            // Xử lý lỗi từ phía máy chủ hoặc API
            console.error('Lỗi khi gửi yêu cầu cập nhật:', error);
        }
    }
    */

    const handleUpdate = (e) => {
        e.preventDefault()
        
        // const updatedUser = { ...user };        // Tạo bản sao của user (để tránh thay đổi user trực tiếp)
        // console.log('Thông tin mới:', updatedUser);
        // setUser(updatedUser);       // Cập nhật state user nếu cần

        const updatedUser = {
            fullName: fullNameState,
            phone: phoneState,
            birthdate: birthdateState,
            gender: genderState,
        };

        console.log('Thông tin mới:', updatedUser);

    };

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
                            <input type="text" name="email" id="email" disabled
                                className='border border-solid border-current rounded-lg col-span-2 pl-4'
                                value={user?.email}
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