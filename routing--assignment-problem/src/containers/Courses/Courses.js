import React, { Component } from "react";
import "./Courses.css";

import { Link, Route } from "react-router-dom";
import Course from "../Course/Course";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
  };

  courseSelectedHandler = (id, title) => {
    this.props.history.push({
      pathname: this.props.match.url + "/" + id,
      state: {
        title: title,
      },
    });
    // console.log("[Props]", this.props);
  };

  render() {
    let courses = this.state.courses.map((course) => {
      return (
        <article
          className="Course"
          key={course.id}
          onClick={() => this.courseSelectedHandler(course.id, course.title)}
        >
          {course.title}
        </article>
      );
    });

    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">{courses}</section>
        <Route path={this.props.match.url + "/:id"} exact component={Course} />
      </div>
    );
  }
}

export default Courses;
