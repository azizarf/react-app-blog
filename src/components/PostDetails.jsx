import React from "react";

const PostDetails = (props) => {
  return(
  <div className="blog-list-item">
      <div className="blog-list-item-title" onClick={()=>props.func('onePost',props.post)}>{props.post.title}</div>
      <div className="blog-list-item-byline">
        <span className="blog-list-item-byline-author">{props.post.author }</span>
        a day ago
      </div>
      <div className="blog-list-item-lede">
        <img src={props.post?.imageUrl}alt="no content" />
      </div>
    </div>
    )
}

export default PostDetails;