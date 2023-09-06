import React, { useState } from "react";

function CreatePost(props){

const [title,setTitle] = useState("")
const [author,setAuthor] = useState(window.location.search.substring(10))
const [content,setContent] = useState("")      
const [imageUrl,setImage] = useState("")                                                           
  return (
    <div className="blog-list-item">
    <h1 className="New-Post-Title">New Post</h1>
    <form className="New-Post-Form">
      <input
      onChange={(e)=>setTitle(e.target.value)}
        id="title"
        type="text"
        className="search"
        placeholder="Title"
        required
        minLength="3"
        defaultValue={title}
      />

      <textarea
        onChange={(e)=>setContent(e.target.value)}
        id="content"
        className="post "
        placeholder="Content..."
        required
        minLength="20"
        defaultValue={content}
      />

      <input
         onChange={(e)=>setImage(e.target.value)}
         id="img"
         type="url"
         placeholder="url"
         required
         minLength="3"
         defaultValue={imageUrl}
      />

      <input
      onClick={(e)=>{
        e.preventDefault()
        props.handleCreate({title:title,author:author,content:content,imageUrl:imageUrl})
      }}
        className="btn btn-secondary searchButton"
        type="button"
        value="Publish"
      />
    </form>
  </div>
  )}
export default CreatePost;