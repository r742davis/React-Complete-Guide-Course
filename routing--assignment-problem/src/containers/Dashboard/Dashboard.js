import React from "react";
import "./Dashboard.css";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";

import Courses from "../Courses/Courses";
import Users from "../Users/Users";

class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="Navigation">
          <nav>
            <ul>
              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact />
          <Route path="/courses" component={Courses} />
          <Route path="/users" component={Users} />
          <Redirect from="/all-courses" to="/courses"/>
          <Route render={() => <h1>Error 404: Route Not Found!</h1>} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Dashboard;
