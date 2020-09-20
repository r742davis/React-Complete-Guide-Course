import React from "react";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Aux from "../Aux/Aux";

class layout extends React.Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar 
          open={this.sideDrawerOpenHandler} 
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default layout;
