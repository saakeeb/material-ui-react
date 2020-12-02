import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FakeData from '../FakeData/FakeData';
import Post from '../Post/Post';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CommentDetails from '../CommentDetails/CommentDetails';
import shuffle from '../FakeData/shuffle';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 auto',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const PostDetails = () => {
    const {postIdNum} = useParams();
    const postId = FakeData.find(pd => pd.id === parseInt(postIdNum));

    const first5 = shuffle.slice(0,5);
    const [comment, setComment] = useState(first5);
    useEffect(()=>{

    },[])

    return (
        <div style={{marginTop: '3.9rem'}}>
            <h3>Post number {postIdNum} details</h3>
            <Post posts={postId} buttonShow={false} postBody={true}></Post>
            
            <Card className={useStyles.root} variant="outlined">
                <CardContent>
                    <Typography variant="h4" className={useStyles.title} color="textSecondary" gutterBottom >Comments</Typography>
                    
                    {
                        comment.map(pd => <CommentDetails comment={pd}></CommentDetails>)
                    }
                </CardContent>
                
            </Card>
        </div>
    );
};

export default PostDetails;