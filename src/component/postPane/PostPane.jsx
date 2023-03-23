import React from 'react';
import './postpane.css'
import AddPost from "../addPost/AddPost";
function PostPane(props) {
    return (
        <div className="postPaneBox">
            <AddPost/>
        </div>
    );
}

export default PostPane;