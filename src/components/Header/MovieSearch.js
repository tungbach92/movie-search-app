import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import { searchAtom } from '../../store/search.atom';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { userAtom } from '../../store/user.atom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25), },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(1), width: 'auto', },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function MovieSearch() {

    const navigate = useNavigate()
    const [user] = useAtom(userAtom)

    // dùng cho nút search 
    const [search, setSearch] = useAtom(searchAtom)

    // dùng cho phần menu : login, register 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit"  sx={{ mr: 2 }}>
                        <LiveTvIcon />
                    </IconButton>
                    <Typography variant="h6"component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        className='hover:text-[#fde047]'
                        onClick={() => { navigate("/") }}
                    >
                        THE MOVIES
                    </Typography>

                    <Search>
                        <SearchIconWrapper> <SearchIcon /> </SearchIconWrapper>
                        <StyledInputBase nputProps={{ 'aria-label': 'search' }} value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Nhập tên phim..."
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    navigate("/search");
                                }
                            }}
                        />
                    </Search>

                    <div className='pl-6'>
                        <AccountCircleIcon onClick={handleClick} />

                        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                            {!user ?
                                (
                                    <div>
                                        <MenuItem onClick={() => {
                                            navigate("/login");
                                            handleClose();
                                        }}>
                                            Login
                                        </MenuItem>
                                        <MenuItem onClick={() => {
                                            navigate("/register");
                                            handleClose();
                                        }}>
                                            Register
                                        </MenuItem>
                                    </div>
                                ) : (
                                    <div>
                                        <MenuItem className='font-bold italic'>
                                            {user?.email}
                                        </MenuItem>
                                        <MenuItem onClick={() => {
                                            navigate("/profile")
                                            handleClose();
                                        }}>
                                            Hồ sơ của bạn
                                        </MenuItem>
                                        <MenuItem onClick={() => {
                                            navigate("/logout")
                                            handleClose();
                                        }}>
                                            Logout
                                        </MenuItem>
                                    </div>
                                )
                            }
                        </Menu>
                    </div>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default MovieSearch