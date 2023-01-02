import React from 'react';
import classes from './post.module.css'

const PostImg = (props) => {
    return(
      <div>
        <img src={props.imgPath} alt="" />
      </div>
    )
}

const Post = (props) => {
return(
        <div className={classes.item}>
          <div className="postImg">
            <PostImg imgPath='https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png'/>
          </div>  
          <div className={classes.postInfo}>
            <div className="postMessage">
            {props.message}
            </div>
          <span className={classes.likes}>likes: {props.likes}</span>
          </div>
        </div>
)
}

export default Post;