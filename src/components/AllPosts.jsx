import React from "react";
import PostDetails from "./PostDetails.jsx"

const AllPosts = (props) => {
return (
props.data.map(element => {
return (  <PostDetails post={element} func = {props.func}  />)
})
)
}
export default AllPosts;