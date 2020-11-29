import React from 'react';
import { useParams } from 'react-router-dom';
import FakeData from '../FakeData/FakeData';
import Post from '../Post/Post';

const PostDetails = () => {
    const {postIdNum} = useParams();
    const postId = FakeData.find(pd => pd.key === {postIdNum});
    console.log('postId', postId);
    console.log(Object.values(postIdNum));
    
    return (
        <div>
            <h3>{postIdNum} no Post details</h3>
        </div>
    );
};

export default PostDetails;