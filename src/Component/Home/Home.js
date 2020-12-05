import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';


const Home = () => {

    const [post, setPost] = useState([]);
    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data=> setPost(data))
    },[]);
    const handleClick = (id)=>{
    }
    return (
        <div style={{marginTop: '7.5rem'}}>
            {
                post.map(pd=><Post posts={pd} handleClick={handleClick} buttonShow={true}  postBody={false}></Post>)
            }
        </div>
    );
};

export default Home;