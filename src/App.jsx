import React from "react";
import AllPosts from "./components/AllPosts.jsx";
import Search from "./components/Search.jsx";
import data from "./data/exampleBlogData.js";
import CreatePost from "./components/CreatePost.jsx"
import OnePost from "./components/OnePost.jsx";
import axios from "axios";
import methods from "../Datalayer/axiosMethodCalls.js"
import { dataUrl } from "../configuration/configUrl";
import Gif from "./components/Gif.jsx"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: window.location.search.substring(10), //DO NOT EDIT THIS LINE
      view: "allPosts",
      blogs:[],
      currentBlog:{},
    };
    this.changeView = this.changeView.bind(this);
  }

  async getData(){
    const data= await  axios.get(dataUrl);
    console.log(data.data);
    const filtred= data.data.filter((e)=>{
      return e.title && e.author && e.imageUrl 
    })
    this.setState({
      blogs:filtred
    })
  }

  componentDidMount(){
this.getData()
  }
  changeView(view) {
    this.setState({
      view: view,
    });
  }
  fetch(){
    getAPICall(dataUrl).then((res)=>{
      this.setState({
        blogs:res.data
        
      })
    }).catch((err)=>{
      console.log(err);
    })
  }
  onTitleClicked(viewFromDetail,blog){
    this.setState({
      view : viewFromDetail,
      currentBlog:blog
    })
  }
  search(title){
    var arr = this.state.blogs.filter((e)=>{
      return e.title.toLowerCase().includes(title.toLowerCase())
    })
    this.setState({
      blogs:arr,
      view:'allPosts'
    })
  }
handleCreate(newBlog){
  // var arr=[... axios.get(dataUrl)]
  // arr.push({...newBlog,author:this.state.username})
  // arr.reverse()
  axios.post(dataUrl,newBlog)
  this.setState({
  view: "allPosts"
})
this.fetch()
}
  renderView() {
    
    if (this.state.view === "allPosts") {
      return <AllPosts data={this.state.blogs} func={this.onTitleClicked.bind(this)}  />;
    } else if (this.state.view === "onePost") {
      return <OnePost blog={this.state.currentBlog} />;
    } else if (this.state.view === "createPost") {
      return <CreatePost handleCreate={this.handleCreate.bind(this)} />;
    }
  }
  render() {
    return (
      this.state.blogs.length ?
      <div>
        <nav className=" nav">
          <div
            className={
              this.state.view !== "createPost"
                ? "nav-unselected"
                : "nav-selected"
            }
            onClick={() => {
              this.changeView("createPost");
            }}
          >
            Create Post
          </div>
          <div
            className={
              this.state.view === "allPosts" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("allPosts")}
          >
            All Posts
          </div>
          <div>
            <Search search={this.search.bind(this)}/>
          </div>
        </nav>
        {this.renderView()}
      </div>:<Gif/>
    );
  }
}

export default App;
