import React from "react";
import classes from "./SideDrawer.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";

const sideDrawer = ({ open, closed, isAuthenticated }) => {
  //Conditional Animations
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={open} clicked={closed}/>
      <div className={attachedClasses.join(' ')} onClick={closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={isAuthenticated}/>
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
