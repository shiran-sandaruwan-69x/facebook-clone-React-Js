import React from 'react';
import './postpane.css'
import AddPost from "../addPost/AddPost";
import Post from "../post/Post";
function PostPane(props) {
    return (
        <div className="postPaneBox">
            <AddPost/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default PostPane;