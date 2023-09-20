import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <div className='px-[20px] bg-slate-100 pt-6'>
            <div className='flex gap-16 justify-center ' >
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCqcKz4B0ROY9YZdUJFa61zBVCpotg3kqizbbmotd5Ip5vtdbffBH9ZzmCX_Ex-Eez5G0&usqp=CAU"
                        alt=""
                    />
                </div>
                <div>
                    <h1 className="text-2xl font-medium pb-4"> Kết nối với chúng tôi </h1>
                    <FacebookIcon />
                    <YouTubeIcon />
                    <TwitterIcon />
                    <img src="https://www.betacinemas.vn/Assets/Common/logo/dathongbao.png" alt="logo"
                        className="w-[250px] pt-4"
                    />
                </div>
                <div>
                    <h1 className="text-2xl font-medium"> Chăm sóc khách hàng </h1>
                    <h2> Hotline: 1900 6017 </h2>
                    <h2> Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết) </h2>
                    <h2> Email: cskh@themoviescorp.vn </h2>
                </div>
            </div>

            <div className='mt-6 pb-10 text-center'>
                <h1 className="text-2xl font-medium"> Liên hệ </h1>
                <h1> CÔNG TY CỔ PHẦN MOVIES MEDIA </h1>
                <h2> Giấy chứng nhận ĐKKD số: 0106633482 - Đăng ký lần đầu ngày 08/09/2014 tại Sở Kế hoạch và Đầu tư Thành phố Hà Nội </h2>
                <h2> Địa chỉ trụ sở: Tầng 3, số 595, đường Giải Phóng, phường Giáp Bát, quận Hoàng Mai, thành phố Hà Nội </h2>
            </div>
        </div>

    )
}

export default Footer 