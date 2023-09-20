import React, { useState } from 'react';
import MovieSearch from '../Header/MovieSearch';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    password: '',
    confirmPassword: '',
    birthdate: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Gửi dữ liệu lên API ở đây sử dụng fetch hoặc thư viện HTTP khác
    // formData chứa dữ liệu của biểu mẫu để gửi đi
    // ...

    // Sau khi gửi thành công, bạn có thể xử lý phản hồi từ máy chủ và thực hiện các thao tác phù hợp
  };

  return (
    <div>
      <MovieSearch />

      <div className='m-[150px] bg-[#f0fdf4] border border-solid border-black rounded-md p-8'>
        <form onSubmit={handleRegister}>
          <div>
            <div className='pb-6 grid grid-cols-3'>
              <label htmlFor="fullName"> Họ tên :</label>
              <input type="text" name="fullName" id="fullName" required
                placeholder='VD: Huong ...'
                className='border border-solid border-current rounded-lg col-span-2 pl-4'
                value={formData.Name}
                onChange={handleChange}
              />
            </div>
            <div className='pb-6 grid grid-cols-3'>
              <label htmlFor="email"> Email :</label>
              <input type="text" name="email" id="email" required
                placeholder='huongmai17@gmail.com'
                className='border border-solid border-current rounded-lg col-span-2 pl-4'
                value={formData.Name}
                onChange={handleChange}
              />
            </div>
            <div className='pb-6 grid grid-cols-3'>
              <label htmlFor="password"> Mật khẩu :</label>
              <input type="password" name="password" id="password" required
                placeholder='Mật khẩu'
                className='border border-solid border-current rounded-lg col-span-2 pl-4'
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className='pb-6 grid grid-cols-3'>
              <label htmlFor="confirmPassword"> Nhập lại mật khẩu :</label>
              <input type="password" name="confirmPassword" id="confirmPassword" required
                placeholder='Nhập lại mật khẩu'
                className='border border-solid border-current rounded-lg col-span-2 pl-4'
                value={formData.confirmPassword}
                onChange={handleChange}
              />
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
              <label htmlFor="phone"> Số điện thoại :</label>
              <input type="text" name="phone" id="phone" required
                placeholder='0937176888'
                className='border border-solid border-current rounded-lg col-span-2 pl-4'
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='text-xl font-bold text-center pt-5 text-cyan-500 '>
            <button type="submit" className='hover:text-blue-500'> Đăng ký </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
