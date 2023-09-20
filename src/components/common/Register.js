import React, { useState } from 'react';
import MovieSearch from '../Header/MovieSearch';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig';

function Register() {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '', // Thay thế formData.Name thành formData.email
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    console.log(123);
    try {
      const { email } = formData;

      // Sử dụng hàm createUserWithEmailAndPassword để tạo tài khoản người dùng mới
      // Không cần mật khẩu vì bạn đang sử dụng đăng ký bằng Gmail
      await createUserWithEmailAndPassword(auth, 'thanh11122@gmail.com', '123456'); // Mật khẩu được để trống

      // Nếu đăng ký thành công, bạn có thể thực hiện các hành động tiếp theo
      // Sau đó, bạn có thể chuyển họ đến trang chính hoặc trang đăng nhập
    } catch (error) {
      console.error("Lỗi đăng ký:", error); // Xử lý lỗi nếu đăng ký không thành công
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
