import React from "react";
import "./Blog.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import Posts from "../Blog/Posts/Posts";
// import NewPost from "../Blog/NewPost/NewPost";
// import FullPost from "../Blog/FullPost/FullPost";
import asyncComponent from "../../hoc/asyncComponent/asyncComponent";

const AsyncNewPost = asyncComponent(() => {
  //import is a webpack specific syntax that allows you to reference
  //the import without actually bundling it in with the bundle - 
  //allows for lazy loading of components. Useful for large apps
  return import("../Blog/NewPost/NewPost");
});

class Blog extends React.Component {
  state ={
    auth: true
  }
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline",
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?",
                  }}
                  activeClassName="my-active"
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}
        <Switch>
          {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
          <Route path="/posts" component={Posts} />
                {/* <Route render={() => <h1>Route not found</h1>}/> */}
          <Redirect from="/" to="/posts" />
          {/* <Route path="/:id" exact component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
