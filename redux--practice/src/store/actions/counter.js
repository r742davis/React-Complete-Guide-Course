import * as actionCreators from "../../store/actions/actionTypes";

export const increment = () => {
  return {
    type: actionCreators.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionCreators.DECREMENT,
  };
};

export const add = (value) => {
  return {
    type: actionCreators.ADD,
    value: value,
  };
};

export const subtract = (value) => {
  return {
    type: actionCreators.SUBTRACT,
    value: value,
  };
};