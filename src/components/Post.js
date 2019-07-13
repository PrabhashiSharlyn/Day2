import React, { Component } from "react";

/*const Post = (post) => (
    <div className="post">
        <p>{post.text}</p>

        <p className="timestamp">{post.timestamp}</p>
        <button className="action-btn edit-btn">Edit</button>
        <button className="action-btn delete-btn">Delete</button>
    </div>

);*/



const Post = ({_id,text, timestamp, onDelete}) => (
    <div className="post">
        <p>{text}</p>

        <p className="timestamp">{timestamp}</p>
        <button className="action-btn edit-btn">Edit</button>
        <button className="action-btn delete-btn" onClick={() => onDelete(_id)}>Delete</button>
    </div>

);

export default Post;