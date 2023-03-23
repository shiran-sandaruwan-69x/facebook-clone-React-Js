import React from 'react';
import './post.css'
function Post(props) {
    return (
        <div className={'post'}>
          <div className="postContainer">
              <div className="postTop">
                  <img src="/images/2.jpg" alt="post image" className="postImage"/>
                  <span className="postUserName">shiran sandaruwan</span>
                  <span className="postTime">5 min ago</span>
              </div>
              <div className="postCenter">
                  <div className="postCaption">Hello I'm BatMan..! I'm from sri lanka</div>
                  <img src="/images/2.jpg" alt="posted images" className="postedImage"/>
              </div>
              <div className="postBottom">
                  <div className="postBottomLeft">
                      <img src="/images/fb%20buttons/like.png" alt="like button" className="likeBtn"/>
                      <img src="/images/fb%20buttons/love.png" alt="heart button" className="heartBtn"/>
                      <img src="/images/fb%20buttons/haha.png" alt="haha button" className="hahaBtn"/>
                      <span className="likeCount">223 peoples like</span>
                  </div>
                  <div className="postBottomRight">
                      <span className="commentCount">
                          26 comments
                      </span>
                  </div>
              </div>
          </div>
        </div>
    );
}

export default Post;


