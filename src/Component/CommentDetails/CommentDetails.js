import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    box: {
            display: 'block',
    }
  });

const CommentDetails = (props) => {
    const {name, pic, comment} =props.comment;
    const [likeColor, setLikeColor] = useState('');

    return (
        <div style={{alignItems:'center'}}>
            <Container style={{margin:'0 auto'}}>
                        <Grid container  className={useStyles.bullet} style={{margin:'20px'}}>
                            <Grid item style={{padding:'0 10px'}}>
                                <Avatar alt="Remy Sharp" src={pic}/>
                            </Grid>
                            <Box component="span" m={1} className={useStyles.box} style={{background:'lightGrey', display:'inlineBlock', padding:'10px', textAlign:'left'}}>
                                <Typography color="textSecondary" ><strong>{name}</strong> </Typography>
                                <Typography color="textSecondary">{comment} </Typography>
                                <ThumbUpAltIcon onClick={ ()=> setLikeColor(likeColor ? '' : 'primary')} color={likeColor}></ThumbUpAltIcon>
                            </Box>
                        </Grid>
            </Container>
        </div>
    );
};

export default CommentDetails;