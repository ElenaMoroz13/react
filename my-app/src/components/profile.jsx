import React from 'react';
import './profile.css'

const Profile = () => {
return(
    <div className='content'>
        <img src='https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'/>
        <div>ava + describtion</div>
        <div>my posts</div>
        <div>new post</div>
        <div className='posts'>
        <div className='item'>post1</div>
        <div className='item'>post2</div>
        </div>
      </div>
)
}

export default Profile;