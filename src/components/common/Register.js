import React, { useState } from 'react';
import MovieSearch from '../Header/MovieSearch';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig';
import { Link } from 'react-router-dom';

const defaultData = {
  fullName: '',
  email: '',
  password: '',
  birthdate: '',
  gender: 'female',
}

function Register() {

  const [formData, setFormData] = useState(defaultData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    try {
      const { email, password } = formData

      if (!email || !password) {
        alert('Vui lòng nhập email và mật khẩu.');
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password)
      alert('Bạn đã đăng ký thành công.')
    } catch (error) {
      alert("Lỗi đăng ký:", error);    // Xử lý lỗi nếu đăng ký không thành công
    } finally {
      setFormData(defaultData)
    }
  };

  return (
    <div>
      <MovieSearch />

      <div className='m-[150px] bg-[#f0fdf4] border border-solid border-black rounded-md p-8'>
        <form className='max-h-[500px]'>
          <div>
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
                value={formData.email} // Sử dụng formData.email thay vì formData.Name
                onChange={handleChange}
              />
            </div>
            <div className='pb-6 grid grid-cols-3'>
              <label htmlFor="password"> Mật khẩu :</label>
              <input type="text" name="password" id="password" required
                placeholder='Tối thiểu 6 kí tự'
                className='border border-solid border-current rounded-lg col-span-2 pl-4'
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='pb-6 grid grid-cols-3'>
            <label htmlFor="birthdate"> Ngày sinh :</label>
            <input type="text" name="birthdate" id="birthdate" required
              placeholder='VD : 02/02/2010'
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
