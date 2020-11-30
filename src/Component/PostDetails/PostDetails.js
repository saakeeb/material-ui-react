import React from 'react';
import { useParams } from 'react-router-dom';
import FakeData from '../Component/FakeData/FakeData';

const PostDetails = () => {
    const {postIdNum} = useParams();
    const postId = FakeData.find(pd => pd.id === parseInt(postIdNum));
    console.log(postId);
    return (
        <div>
            <h3>{postIdNum} no details here</h3>

        </div>
    );
};

export default PostDetails;