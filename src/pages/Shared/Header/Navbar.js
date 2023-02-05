import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiElectric } from 'react-icons/gi'
import { BiLogIn } from 'react-icons/bi'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

//**** */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

//**** */

const Navbar = () => {
    //****************
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    //****************
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const logOut = () => {
        signOut(auth)
        navigate('/login')
        localStorage.removeItem('accessToken')
    }
    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            textDecoration: 'none', color: 'white', padding: '0.5em',
                        }}
                    >
                        DRONE MANUFACTURE
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            X
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link style={{ textDecoration: 'none', color: 'white', padding: '0.5em', }} to={'/'}>Home</Link>
                                <Link style={{ textDecoration: 'none', color: 'white', padding: '0.5em', }} to={'/parts'}>Parts</Link>

                                <Link style={{ textDecoration: 'none', color: 'white', padding: '0.5em', }} to={'/portfolio'}>My Portfolio</Link>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            textDecoration: 'none', color: 'white', padding: '0.5em',
                        }}
                    >
                        DRONE MANUFACTURE
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to={'/'} style={{ textDecoration: 'none', color: 'white', padding: '0.5em', }}>Home</Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link style={{ textDecoration: 'none', color: 'white', padding: '0.5em', }} to={'/parts'}>Parts</Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link style={{ textDecoration: 'none', color: 'white', padding: '0.5em', }} to={'/portfolio'}>My Portfolio</Link>
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {
                            user ?
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt={user?.displayName} src={user.photoURL} />
                                    </IconButton>
                                </Tooltip>
                                :
                                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                    <Button onClick={handleCloseNavMenu} variant='contained'
                                        sx={{ my: 2, color: 'white', display: 'block' }}><Link style={{ textDecoration: 'none', color: 'white', padding: '0.5em', }} to={'/login'}>LOGIN</Link></Button>
                                    <Button onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}><Link style={{ textDecoration: 'none', color: 'white', padding: '0.5em', }} to={'/register'}>REGISTER</Link></Button>
                                </Box>
                        }
                        {
                            user && <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography variant='h5'>{user?.displayName}</Typography>
                                </MenuItem>
                                {/* <MenuItem onClick={handleCloseUserMenu}>
                                    <Link to={'/dashboard'} style={{ textDecoration: 'none', color: 'white', padding: '0.5em', }} >Dashboard</Link>
                                </MenuItem> */}
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Button variant='outlined' onClick={logOut}>Logout</Button>
                                </MenuItem>
                            </Menu>
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;