import React from 'react';
import classes from './myPosts.module.css'

const myPosts = () => {
return(
      <div>
        <div>my posts</div>
        <div>new post</div>
        <div className={classes.posts}>
        <div className={classes.item}>post1</div>
        <div className={classes.item}>post2</div>
        </div>
      </div>
)
}

export default myPosts;