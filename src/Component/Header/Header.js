import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

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
        <div className={useStyles.root} style={{marginBottom:'50px'}}>
            <AppBar position="fixed" >
                <Toolbar variant="dense">
                    <Link to="/home"><IconButton edge="start" className={useStyles.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon /> 
                    </IconButton></Link>
                    <Grid container alignItems="center" className={useStyles.root} style={{margin:'0 auto', padding:'0 auto'}}>
                    <Typography variant="h6" color="inherit" className={useStyles.type} style={{margin:'0 auto', padding:'0 auto'}}>
                        User Posts
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <Typography variant="h6" color="inherit" className={useStyles.type} style={{margin:'0 auto', padding:'0 auto'}}>
                        User Comments
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                        <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} style={{margin:'0 auto', padding:'0 auto'}}/>
                    <Divider orientation="vertical" flexItem />
                        <Badge badgeContent={4} color="secondary" style={{margin:'0 auto', padding:'0 auto'}}>
                            <MailIcon />
                        </Badge>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;