import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  price,
  purchasable,
  ordered,
  isAuth
}) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>${price.toFixed(2)}</strong>
    </p>
    {controls.map((control) => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => ingredientAdded(control.type)}
        removed={() => ingredientRemoved(control.type)}
        disabled={disabled[control.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!purchasable}
      onClick={ordered}
    >
      {isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}
    </button>
  </div>
);

export default buildControls;
