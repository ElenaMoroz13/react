import React from 'react';
import classes from './myPosts.module.css'
import Post from './post/post';


const MyPosts = (props) => {

  let postsElements = 
    props.posts.map(p => <Post className={classes.post} message={p.message} likes={p.likes}/>)
return(
      <div className={classes.postsContent}>
        <div className={classes.postsBlock}>
        <div className={classes.myPosts}>My Posts</div>
        <textarea></textarea>
        <div>
        <button className={classes.addPost} onClick={alert('do u want to add post?')}>Add post</button>
        </div>
        </div>
        <div className={classes.posts}>
        {postsElements}
        </div>
      </div>
)
}

export default MyPosts;