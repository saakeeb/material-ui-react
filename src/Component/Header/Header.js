import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(200),
    },
    inputInput: {
        marginLeft: 20,
    },
    type:{
        marginLeft: theme.spacing(200), 
    },
    '& > *': {
        margin: theme.spacing(1),
      },
  }));

const Header = () => {
    return (
        <container className={useStyles.root}>
            <AppBar position="fixed" >
                <Toolbar variant="dense">
                    <Link to="/home">
                        <IconButton edge="start" className={useStyles.menuButton} color="inherit" aria-label="menu" title='Home' style={{color:'white'}}>
                            <MenuIcon /> 
                        </IconButton>
                    </Link>
                    <Grid container alignItems="center" className={useStyles.root} style={{margin:'0 auto', padding:'0 auto'}}>
                        <Link to="/home" style={{color:'white', textDecoration:'none', padding:'0 2rem'}}>
                            <Typography variant="h6" color="inherit" className={useStyles.type} style={{margin:'0 auto', padding:'0 auto'}} title="User Post">
                                Users Diary
                            </Typography>
                        </Link>
                        
                        <Divider orientation="vertical" flexItem />
                        <Link to="/users" style={{padding:'0 3.5rem', textDecoration:'none', color:'white'}}>
                            <Typography variant="h6" color="inherit" className={useStyles.type} title="Users list">
                                Users
                            </Typography>
                        </Link>
                        
                        <Divider orientation="vertical" flexItem />

                            <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} style={{margin:'0 auto', padding:'0 auto'}}/>
                        <Divider orientation="vertical" flexItem />
                        
                        <container style={{margin:'0 auto', padding:'0 auto'}}>
                            <Link to='/friendRequest' style={{padding:'0 15px', color:'white'}}>
                                <Badge badgeContent={7} color="secondary">
                                    <AccountCircleOutlinedIcon />
                                </Badge>
                            </Link>
                            <Link to="/notification" style={{padding:'0 15px', color:'white'}}>
                                <Badge badgeContent={5} color="secondary" >
                                    <NotificationsNoneOutlinedIcon />
                                </Badge>
                            </Link>
                            <Link to="/message" style={{padding:'0 15px', color:'white'}}>
                                <Badge badgeContent={2} color="secondary" >
                                    <MailOutlineIcon />
                                </Badge>
                            </Link>
                        </container>
                        
                    </Grid>
                </Toolbar>
            </AppBar>
        </container>
    );
};

export default Header;