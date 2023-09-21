import React, { useState } from 'react';
import MovieSearch from '../Header/MovieSearch';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig';

const defaultData = {
  fullName: '',
  email: '',
  password: ''
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
      console.log(email, password)
      if (!email || !password) return;
      await createUserWithEmailAndPassword(auth, email, password).then(user => {
        alert('dang ky thanh cong roi')
      })

    } catch (error) {
      alert("Lỗi đăng ký:", error);    // Xử lý lỗi nếu đăng ký không thành công
    } finally {
      // setFormData(defaultData)
    }
  };

  return (
    <div>
      <MovieSearch />

      <div className='m-[150px] bg-[#f0fdf4] border border-solid border-black rounded-md p-8'>
        <form>
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
              <label htmlFor="fullName"> Mật khẩu :</label>
              <input type="text" name="password" id="password" required
                placeholder='Nhập mật khẩu'
                className='border border-solid border-current rounded-lg col-span-2 pl-4'
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div onClick={handleRegister} className='text-xl font-bold text-center pt-5 text-cyan-500 '>
            <button type="submit" className='hover:text-blue-500'> Đăng ký </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
