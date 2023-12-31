import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import { userAtom } from '../../store/user.atom'
import { Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/storage';
import { storage } from '../../firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

function UserInfo() {

    const [user, setUser] = useAtom(userAtom)

    const [fullNameState, setFullNameState] = useState(user?.fullName);
    const [emailState, setEmailState] = useState(user?.email);
    const [phoneState, setPhoneState] = useState(user?.phone);
    const [birthdateState, setBirthdateState] = useState(user?.birthdate);
    const [genderState, setGenderState] = useState(user?.gender);

    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(() => {
        setFullNameState(user?.fullName)
        setEmailState(user?.email)
        setPhoneState(user?.phone)
        setGenderState(user?.gender)
        setBirthdateState(user?.birthdate)
    }, [user])

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
            setLoading(true)
            const response = await axios.post(`/update/${user.user_id}`, updatedUser);
            setUser(response.data)              // Cập nhật atom userAtom với dữ liệu phản hồi từ API
            console.log('Cập nhật thành công', response.data);
        } catch (e) {
            console.error('Lỗi khi cập nhật thông tin:', e);
        }

    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };

    const handleUpload = async () => {
        try {
            if (file) {
                const imageRef = ref(storage, `images/${file.name}`);
                const snapshot = await uploadBytes(imageRef, file);
                const url = await getDownloadURL(snapshot.ref);
                setImage(url)
            }
        } catch (e) {
            console.error(e);
        }
    }


    console.log(image);
    console.log(file);

    return (
        <div className='flex border border-solid border-gray-200 rounded-md h-[500px]'>

            <div className=' bg-emerald-50 w-[300px] text-center pt-[80px]'>
                <Button color="primary" aria-label="upload picture" component="label" >
                    {loading ? (
                        <CircularProgress />
                    ) : (
                        <div className={'flex flex-col items-center'}>
                            <img className='object-contain rounded-full' width={80} height={80}
                                src={!image ? '/images/upload.svg' : image}
                                alt='upload-icon'
                            />
                        </div>
                    )}

                    <input type="file" id={`upload-image`} accept=".jpg, .jpg, .png" hidden
                        onChange={event => handleImageChange(event)}
                    />
                </Button>
                <button onClick={handleUpload}> Upload Image </button>


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