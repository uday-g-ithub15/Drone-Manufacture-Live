import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Navbar from '../Shared/Header/Navbar';
import Loading from '../Shared/Loading';
import { BiMenu } from 'react-icons/bi'
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, Button, ListItemIcon, ListItemText, Menu, Toolbar, Typography } from '@mui/material';
import { AiOutlineMail, AiOutlineInbox, AiOutlineMenu } from 'react-icons/ai'

const Dashboard = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [user, loading] = useAuthState(auth);
    const { admin } = useAdmin(user);
    if (loading) {
        return <Loading />
    }
    const menu = (
        <List >
            <ListItem sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', gap: 1 }} >
                <Button variant='contained' component={Link} to='/dashboard' >
                    Profile
                </Button>
                {!admin && <>
                    <Button variant='contained' component={Link} to='/dashboard/reviews' >
                        My Review
                    </Button>
                    <Button variant='contained' component={Link} to='/dashboard/myorder' >
                        My Orders
                    </Button>
                </>}
                {admin && <>
                    <Button component={Link} variant={'contained'} to='/dashboard/manageorders'>Manage Orders</Button>
                    <Button component={Link} variant={'contained'} to='/dashboard/addproduct'>Add a product</Button>
                    <Button component={Link} variant={'contained'} to='/dashboard/manageuser'>Manage Users</Button>
                    <Button component={Link} variant={'contained'} to='/dashboard/manageproduct'>Manage Products</Button>
                </>}
            </ListItem>
        </List>
    )
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: '', height: '100vh', }}>
            <Box sx={{ flex: '1' }}>
                <Navbar />
            </Box>
            <Box sx={{ display: 'flex', width: '100%', flex: '8' }}>
                <Box sx={{ flex: '3', }}>
                    <Outlet />
                </Box>
                <Box sx={{ flex: '1', backgroundColor: 'aqua' }}>

                    {menu}

                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;





