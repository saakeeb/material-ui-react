import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Post = (props) => {

    const {title, id} = props.posts;
   
    return (
        <Card className={useStyles.root} >
            <CardActionArea >
                <CardMedia component="img" alt="User Post" height="140"style={{width: '300px', margin:'10px auto'}}
                image='https://picsum.photos/200' title="User Post"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                    </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent: 'center'}}>
                <Link to={"/user/"+id}>
                    <Button size="small" variant="contained" color="secondary" onClick={()=>props.handleClick(id)} style={{textDecoration:'none'}}>
                        Show Details Post
                    </Button>
                </Link>
                
            </CardActions>
        </Card>
    );
};

export default Post;