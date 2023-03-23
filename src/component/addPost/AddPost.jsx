import React from 'react';
import './addpost.css'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

function AddPost(props) {
    return (
        <div className="addPost">
            <div className="addPostContainer">
                <div className="addPostTop">
                    <img src="/images/1.jpg" alt="profile pic" className="addPostPic"/>
                    <input type="text" placeholder='what is your mind...?' className="addPostInput"/>
                </div>
                <hr className="postHr"/>
                <div className="addPostBottom">
                    <div className="addPostOptions">
                        <div className="addPostOption">
                            <AddAPhotoIcon htmlColor='orange' className='addPhoto'/>
                            <span className="addPostOptionText">Add Photo / video</span>
                        </div>
                        <div className="addPostOption">
                            <AddLocationAltIcon htmlColor='red' className='addLocation'/>
                            <span className="addPostOptionText">Add Location</span>
                        </div>
                        <div className="addPostOption">
                            <LocalOfferIcon htmlColor={'blue'} className='addPhoto'/>
                            <span className="addPostOptionText">Add Tag</span>
                        </div>
                        <div className="addPostOption">
                            <LiveTvIcon htmlColor={'tomato'} className='addPhoto'/>
                            <span className="addPostOptionText">Go Live</span>
                        </div>
                    </div>
                    <button className="postButton">post</button>
                </div>
            </div>
        </div>
);
}

export default AddPost;