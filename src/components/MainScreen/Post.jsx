import React from 'react';
import './Post.css';

import Like from '../assets/thumbs-up.png';
import Comment from '../assets/message-circle.png';
import Share from '../assets/share-2.png';
import Send from '../assets/send.png';

function Post({ name, position, time, avatar, image, text  }) {
    return(
        <div className='post'>
            <div className='post-header'>
                <img src={avatar} alt='Author' className='post-avatar' />
                <div className='post-info'>
                    <h4>{name}</h4>
                    <p>{position}</p>
                    <span className='post-time'>{time}</span>
                </div>
            </div>

            <p className='post-text'>{text}</p>

            {image && <img src={image} alt="Post content" className='post-image' />}

            <div className='post-actions'>
                <button><img src={Like} alt='Like' /> Like</button>
                <button><img src={Comment} alt="Comment" /> Comment</button>
                <button><img src={Share} alt="Share" /> Share</button>
                <button><img src={Send} alt="Send" /> Send</button>
            </div>
        </div>
    );
}

export default Post;