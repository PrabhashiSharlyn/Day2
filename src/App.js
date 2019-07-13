import React, { Component } from 'react';

import Header from "./components/Header";
import Composer from './components/Composer';
import Post from './components/Post';

import posts from './data/posts';

class App extends Component {

  constructor(props) {
    super(props);

    //console.log('Before',posts);

    this.state = {
      //posts:posts
      posts
    };

    //console.log('After',posts);

  }

  /*renderPostItem(post){
    return <Post key ={post._id} _id={post._id} text={post.text} timestamp={post.timestamp} />
    //return <Post key ={post._id} _id={post._id} text={post.text} timestamp={post.timestamp} />
    //return <p>Text goes here</p>
  }*/

  /*renderPostItem = ({ _id, ...rest }) => {
    return <Post key={_id} {...rest} /> //rest means a variable get the rest to rest variable
  }*/

  renderPostItem = (post) => {
    return <Post key={post._id} {...post} onDelete={this.onDelete}/> //rest means a variable get the rest to rest variable
  }

  onSubmit = (text) => {
    const { posts } = this.state;
    const _id = posts.length + 1;
    const timestamp = String(new Date());
    const post = { _id, text, timestamp };

    posts.push(post);
    this.setState({
      posts
    });

  }

  onDelete = (_id) =>{
    const {posts} =  this.state;
    
    const filteredPosts = posts.filter((post) =>{
      return post._id !== _id;
    });

    this.setState({
      posts: filteredPosts
    });

  }

  render() {

    const { posts } = this.state;

    return (
      <div className="container">
        <Header />

        <div className="content">
          <Composer onSubmit={this.onSubmit} />

          <div className="posts">
            {posts.map(this.renderPostItem)}
          </div>
        </div>
      </div>

    );
  }
}



export default App;
