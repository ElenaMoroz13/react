import React from 'react';
import classes from './post.module.css'

const Post = (props) => {
return(
        <div className={classes.item}>
          <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/ee5d54ff-e5b4-443d-a392-604c61c298c6/600x900" alt="" />
          {props.message}
          <div>
          <span>{props.likes}</span>
          </div>
          </div>
)
}

export default Post;