import React, { useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userAtom } from '../../store/user.atom';

function Logout() {

    const [open, setOpen] = React.useState(true);
    const navigate = useNavigate();
    const [user, setUser] = useAtom(userAtom)

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleLogout = () => {
        setUser(null)
        navigate('/login');
    };

    return (
        <Dialog aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" open={open}>
            <DialogTitle id="alert-dialog-title"> {"Đăng xuất"} </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description"> Bạn có chắc chắn muốn đăng xuất tài khoản </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleLogout}> Đồng ý </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Logout