import SinglePost from "./SinglePost";
import Loading from "../Loading";
import { Component } from "react";

class PostsContainer extends Component {
  state = {
    loading: false,
    posts: [],
    display: false,
  };

  componentDidMount = async () => {
    this.setState({
      ...this.state,
      loading: true,
    });
    try {
      let response = await fetch(
        "https://linkedin-backend-server.herokuapp.com/post",
        {
          headers: {
          //   Authorization:
          //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU4MmIzNTgxNzAwMTVjMjI3MDMiLCJpYXQiOjE2MzExMDA5NzMsImV4cCI6MTYzMjMxMDU3M30.0oXsqtJMnQ-VviYyjhLSP4Vsr-B8wsYQFOuehjie-0I",
           },
        }
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({
          loading: false,
          posts: data,
          display: true,
        });
        console.log(this.state);
      } else {
        console.log("Error");
        this.setState({
          ...this.state,
          loading: false,
        });
      }
    } catch (err) {
      console.log(err);
      this.setState({
        ...this.state,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="all-posts-container">
        {console.log('post cont',this.state.posts)}
        <hr style={{margin:"10px 0px"}} />
        {this.state.loading && <Loading />}
        {this.state.display &&
          this.state.posts
            .slice(this.state.posts.length - 10, this.state.posts.length)
            .reverse().map((p) => <SinglePost user={p.profile} post={p} />)}
      </div>
    );
  }
}

export default PostsContainer;
