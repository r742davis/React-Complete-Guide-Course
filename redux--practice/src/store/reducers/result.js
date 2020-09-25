import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: [],
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    (result) => result.id !== action.resultElementId
  );
  return updateObject(state, { results: updatedArray });
};

const storeResult = (state, action) => {
  return updateObject(state, {
    results: state.results.concat({
      id: new Date(),
      value: action.result,
    }),
  });
}

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT: return storeResult(state, action)
    case actionType.REMOVE_RESULT: return deleteResult(state, action);
    default: return state;
  }
};

export default resultReducer;

// You MUST copy the array in an immutable way by using
// concat because you want a NEW array, not a reference
// to the old one in the state. This immutable technique
// makes the state predictable.
