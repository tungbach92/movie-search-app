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


function MovieDetail() {

    const { id } = useParams();                     // lay id tu url
    const { popularMovies } = usePopularMovies();   // lay popularMovies

    const [movie, setMovie] = useState('');         // tao state movie, tu id va popularMovies 


    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        // setOpen(false);
    };


    useEffect(() => {
        // Tìm phim dựa trên id trong danh sách popularMovies
        const foundMovie = popularMovies.find((m) => m.id.toString() === id);

        if (foundMovie) {
            setMovie(foundMovie);
        } else {
            // 
        }
    }, [id, popularMovies]);

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

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>

        </div>

    );
}

export default MovieDetail