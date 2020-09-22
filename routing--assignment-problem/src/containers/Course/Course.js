import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Course extends Component {
  state = {
    loadedCourse: null,
  };

  componentDidMount() {
    console.log("[DID MOUNT]", this.props);
    this.loadData();
  }

  componentDidUpdate() {
    console.log("[DID UPDATE]");
    console.log(this.props);
    this.loadData();
  }

  loadData() {
    if (this.props.match.params.id) {
      if (!this.state.loadedCourse || this.state.loadedCourse.title != this.props.location.state.title) {
        this.setState({
          loadedCourse: {
            title: this.props.location.state.title,
            id: this.props.match.params.id,
          },
        });
      }
    }
  }
  render() {
    let course = <p>Loading...</p>;
    if (this.state.loadedCourse) {
      course = (
        <div>
          <h1>{this.state.loadedCourse.title}</h1>
          <p>You selected the Course with ID: {this.state.loadedCourse.id}</p>
        </div>
      );
    }
    return course;
  }
}

export default withRouter(Course);
