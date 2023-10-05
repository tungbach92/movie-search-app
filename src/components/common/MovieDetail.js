import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
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
import MovieSearch from '../Header/MovieSearch';
import { userAtom } from '../../store/user.atom';

function MovieDetail() {

    const { id } = useParams();                     // lay id tu url
    const { popularMovies } = usePopularMovies();   // lay popularMovies
    const [movie, setMovie] = useState('');         // tao state movie, tu id va popularMovies 

    const navigate = useNavigate();

    const [user] = useAtom(userAtom)

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
    if (!user) {
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
        <>
            <MovieSearch />

            <div className='flex m-[100px] gap-6 '>
                <img alt={movie.title} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />

                <div>
                    <div className="flex flex-col p-4 text-justify">
                        <h6 className="text-2xl mb-3"> {movie.title} </h6>
                        <p className="text-sm"> Release Date: {movie.release_date} </p>
                        <p className="text-sm"> Rating: {movie.vote_average} <StarIcon /> </p>
                        <p className="text-sm"> Review: {movie.vote_count} </p>
                        <p className="text-sm"> Overview: {movie.overview} </p>
                    </div>
                    <div className='flex pt-8 gap-6 flex-row-reverse '>
                        <Link to='https://www.youtube.com/watch?v=1sITMF-wxto&pp=ygUNdHJhaWxlciBwaGltIA%3D%3D'>
                            <button className='border border-solid border-black rounded-md p-2 hover:bg-[#ecfeff]'>
                                Xem phim
                            </button>
                        </Link>
                        <Link to='https://www.youtube.com/watch?v=IvTvR8paEm0&pp=ygUNdHJhaWxlciBwaGltIA%3D%3D'>
                            <button className='border border-solid border-black rounded-md p-2 hover:bg-[#ecfeff]'>
                                Xem Trailer
                            </button>
                        </Link>
                        
                    </div>
                </div>
            </div >

        </>
    );
}

export default MovieDetail