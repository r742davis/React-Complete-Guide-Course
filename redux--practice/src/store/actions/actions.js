export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const REMOVE_RESULT = "REMOVE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const add = (value) => {
  return {
    type: ADD,
    value: value,
  };
};

export const subtract = (value) => {
  return {
    type: SUBTRACT,
    value: value,
  };
};

export const saveResult = (result) => {
  return {
    type: STORE_RESULT,
    result: result,
  };
};

export const storeResult = (result) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const removeResult = (id) => {
  return {
    type: REMOVE_RESULT,
    resultElementId: id,
  };
};
