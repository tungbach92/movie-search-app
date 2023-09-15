//  Component hiển thị chi tiết về một bộ phim khi được chọn.

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import usePopularMovies from '../../hooks/usePopularMovies';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { loginAtom } from '../../store/Login.atom';

function MovieDetail() {

    const { id } = useParams();                     // lay id tu url
    const { popularMovies } = usePopularMovies();   // lay popularMovies
    const [movie, setMovie] = useState('');         // tao state movie, tu id va popularMovies 

    const navigate = useNavigate();

    const [isLoggedIn] = useAtom(loginAtom)

    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        // setOpen(false);
    };


    useEffect(() => {
        const foundMovie = popularMovies.find((m) => m.id.toString() === id);   // Tìm phim dựa trên id trong danh sách popularMovies

        if (foundMovie) {
            setMovie(foundMovie);
        } else {
            // 
        }
    }, [id, popularMovies]);

    // Bạn cần kiểm tra isLoggedIn ở đây và hiển thị dialog chỉ khi người dùng chưa đăng nhập
    if (!isLoggedIn) {
        return (
            <Dialog aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"
                open={open}
                onClose={handleClose}
            >
                <DialogTitle id="alert-dialog-title"> {"Thông báo"} </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description"> Vui lòng đăng nhập để tiếp tục sử dụng dịch vụ </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => navigate('/login')}> Đồng ý </Button>
                </DialogActions>
            </Dialog>
        );
    }

    return (
        <div className='flex m-[70px] gap-6'>
            <img alt={movie.title} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />

            <div className="flex flex-col p-4 text-justify">
                <h6 className="text-2xl mb-3"> {movie.title} </h6>
                <p className="text-sm"> Release Date: {movie.release_date} </p>
                <p className="text-sm"> Rating: {movie.vote_average} <StarIcon /> </p>
                <p className="text-sm"> Review: {movie.vote_count} </p>
                <p className="text-sm"> Overview: {movie.overview} </p>
            </div>

        </div >
    );
}

export default MovieDetail