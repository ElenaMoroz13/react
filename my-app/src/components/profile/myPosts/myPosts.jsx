import React from 'react';
import classes from './myPosts.module.css'
import Post from './post/post';

const MyPosts = () => {
return(
      <div>
        <div>My Posts</div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <Post message='hi , how are u?' likes='34'/>
        <Post  message='it is my first post' likes='15'/>
        {/* <Post />
        <Post />
        <Post />
        <Post /> */}
      </div>
)
}

export default MyPosts;