import React from "react";

const OnePost = (props) => {
  return (
  <div className="blog-list-item" >
    <div className="blog-list-item-title">{props.blog.title}</div>
    <div className="blog-list-item-byline">
      <span className="blog-list-item-byline-author">{props.blog.author}</span>
      some time ago
    </div>
    <div className="blog-list-item-lede">{props.blog.content} </div>
    <div><img src={props.blog.imgUrl}/>  </div>
  </div>
  )
}

export default OnePost;