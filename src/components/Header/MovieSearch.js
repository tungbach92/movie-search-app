import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { searchAtom } from '../../store/search.atom';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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

    // dùng cho nút search 
    const [search, setSearch] = useAtom(searchAtom)

    const navigate = useNavigate();


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
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        className='hover:text-[#fde047]'
                        onClick={() => { navigate("/") }}
                    >
                        THE MOVIES
                    </Typography>

                    <Search>
                        <SearchIconWrapper> <SearchIcon /> </SearchIconWrapper>
                        <StyledInputBase nputProps={{ 'aria-label': 'search' }}
                            value={search}
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

                            <MenuItem onClick={() => {
                                // Handle logout logic here
                                handleClose();
                            }}>
                                Logout
                            </MenuItem>
                        </Menu>
                    </div>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default MovieSearch