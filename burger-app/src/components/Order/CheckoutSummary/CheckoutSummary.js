import React from "react";
import classes from "./CheckoutSummary.css";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes good!</h1>
      <div>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button buttonType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
      <Button buttonType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
    </div>
  )
}

export default checkoutSummary;