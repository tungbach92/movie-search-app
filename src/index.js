import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/* 
- Giao diện người dùng: thân thiện và trực quan, giúp người dùng dễ dàng tìm kiếm và xem thông tin phim.
- Tìm kiếm phim:  người dùng nhập tên phim vào ô tìm kiếm và sau đó hiển thị danh sách các kết quả phim liên quan.
- Hiển thị thông tin phim: Khi người dùng chọn một phim từ danh sách kết quả, ứng dụng sẽ hiển thị thông tin chi tiết về phim đó,
  bao gồm tiêu đề, nội dung tóm tắt, hình ảnh và thông tin khác.
- Bộ lọc và sắp xếp: Người dùng có thể sắp xếp danh sách kết quả phim theo nhiều tiêu chí 
  (ví dụ: theo ngày ra mắt, đánh giá). Họ cũng có thể áp dụng các bộ lọc (ví dụ: theo thể loại phim).
- Sử dụng useState và useEffect: 
  + useState : quản lý trạng thái tìm kiếm và danh sách kết quả phim.
  + useEffect : gọi API khi trạng thái tìm kiếm thay đổi.
- Trang chi tiết phim: chọn một phim từ danh sách kết quả -> hiển thị một trang chi tiết phim
- Xử lý lỗi: Xử lý trường hợp không tìm thấy kết quả hoặc gặp lỗi khi gọi API.
*/