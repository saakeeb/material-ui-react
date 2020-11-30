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
        console.log('button click', id);
    }
    return (
        <div style={{marginTop: '3.9rem'}}>
            {
                post.map(pd=><Post posts={pd} handleClick={handleClick} ></Post>)
            }
        </div>
    );
};

export default Home;