import React, { useState } from 'react';
import MovieSearch from '../Header/MovieSearch';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const defaultData = {
  fullName: '',
  email: '',
  password: '',
  phone: '',
  birthdate: '',
  gender: 'female',
  imageUrl: ''
}

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

function Register() {

  const [formData, setFormData] = useState(defaultData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // sử dụng firebase
  // const handleRegister = async () => {
  //   try {
  //     const { email, password } = formData
  //     if (!email || !password) {
  //       alert('Vui lòng nhập email và mật khẩu.');
  //       return;
  //     }

  //     await createUserWithEmailAndPassword(auth, email, password)
  //     alert('Bạn đã đăng ký thành công.')
  //   } catch (error) {
  //     alert("Lỗi đăng ký:", error);
  //   } finally {
  //     setFormData(defaultData)
  //   }
  // };

  // sử dụng api với then

  const handleRegister = async (e) => {
    e.preventDefault()

    const { email, password, fullName, phone, birthdate, gender } = formData
    if (!email || !password) {
      alert('Vui lòng nhập email và mật khẩu.');
      return;
    }


    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const birthdateError = validateBirthdate(birthdate);

    if (emailError || phoneError || birthdateError) {
      console.error(
        `Vui lòng sửa các lỗi sau:\n
      ${emailError ? '-' + emailError + '\n' : ''}
      ${phoneError ? '-' + phoneError + '\n' : ''}
      ${birthdateError ? '- ' + birthdateError : ''}`
      );
      return;
    }


    // Gửi yêu cầu đăng ký người dùng thông qua API
    try {
      await axios.post('https://bach-users-api.onrender.com/register', { email, password, fullName, phone, birthdate, gender })
      navigate('/');
    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <MovieSearch />

      <div className='m-[150px] bg-[#f0fdf4] border border-solid border-black rounded-md p-8'>
        <form className='max-h-[500px]'>
          <div className='pb-6 grid grid-cols-3'>
            <label htmlFor="fullName"> Họ tên :</label>
            <input type="text" name="fullName" id="fullName" required
              placeholder='VD: Huong ...'
              className='border border-solid border-current rounded-lg col-span-2 pl-4'
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className='pb-6 grid grid-cols-3'>
            <label htmlFor="email"> Email :</label>
            <input type="text" name="email" id="email" required
              placeholder='huongmai17@gmail.com'
              className='border border-solid border-current rounded-lg col-span-2 pl-4'
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className='pb-6 grid grid-cols-3'>
            <label htmlFor="password"> Mật khẩu :</label>
            <input type="password" name="password" id="password" required
              placeholder='Tối thiểu 6 kí tự'
              className='border border-solid border-current rounded-lg col-span-2 pl-4'
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className='pb-6 grid grid-cols-3'>
            <label htmlFor="phone"> Số điện thoại :</label>
            <input type="text" name="phone" id="phone" required
              placeholder='0586311225'
              className='border border-solid border-current rounded-lg col-span-2 pl-4'
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className='pb-6 grid grid-cols-3'>
            <label htmlFor="birthdate"> Ngày sinh :</label>
            <input type="text" name="birthdate" id="birthdate" required
              placeholder='VD : 2023-09-21'
              className='border border-solid border-current rounded-lg col-span-2 pl-4'
              value={formData.birthdate}
              onChange={handleChange}
            />
          </div>

          <div className='pb-6 grid grid-cols-3'>
            <label htmlFor="gender"> Giới tính :</label>
            <select name="gender" id="gender" required
              className='border border-solid border-current rounded-lg col-span-2 pl-4'
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>

          <div onClick={handleRegister} className='text-xl font-bold text-center pt-5 text-cyan-500 '>
            <button type="submit" className='hover:text-blue-500'> Đăng ký </button>
          </div>

          <p className='text-center italic'> Bằng cách đăng ký, bạn đã đồng ý với Điều khoản sử dụng </p>

          <p className='text-center pt-6 '>
            Bạn đã có tài khoản, <Link to="/login" className='underline hover:text-cyan-600 font-medium'> ĐĂNG NHẬP </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
