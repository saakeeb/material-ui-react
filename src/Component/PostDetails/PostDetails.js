import React from 'react';
import { useParams } from 'react-router-dom';
import FakeData from '../FakeData/FakeData';
import Post from '../Post/Post';

const PostDetails = () => {
    const {postIdNum} = useParams();
    const postId = FakeData.find(pd => pd.id === parseInt(postIdNum));
    console.log(postId);
    return (
        <div style={{marginTop: '3.9rem'}}>
            <h3>{postIdNum} no details here</h3>
            <Post posts={postId}></Post>

        </div>
    );
};

export default PostDetails;