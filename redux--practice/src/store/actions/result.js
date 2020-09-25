import * as actionCreators from "../../store/actions/actionTypes";

export const saveResult = (result) => {
  return {
    type: actionCreators.STORE_RESULT,
    result: result,
  };
};

export const storeResult = (result) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // const oldCounter = getState().ctr.counter;
      // console.log(oldCounter);
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const removeResult = (id) => {
  return {
    type: actionCreators.REMOVE_RESULT,
    resultElementId: id,
  };
};
