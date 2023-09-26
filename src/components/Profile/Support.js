import React from 'react'

function Support() {
    return (
        <div
            className="p-10 text-left leading-relaxed text-2xl
                bg-cover bg-center h-64 md:h-96 lg:h-[600px] bg-no-repeat 
                bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-mjhHpJxK0bbHVxCBwgON76ytBX975xBUNw&usqp=CAU')]
            "
        >
            <p className='text-4xl'> Khách hàng cần chúng tôi hỗ trợ? </p>
            <p className='text-xl pb-6 italic text-red-500 '> Hỗ trợ giải đáp các vấn đề trong quá trình sử dụng dịch vụ .</p>
            <h2> Hotline: 1900 6017 </h2>
            <h2> Email: cskh@themoviescorp.vn </h2>
            <h2> Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết) </h2>
        </div>
    )
}

export default Support