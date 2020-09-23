import * as actionType from "../actions";

const initialState = {
  results: [],
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT:
      // You MUST copy the array in an immutable way by using
      // concat because you want a NEW array, not a reference
      // to the old one in the state. This immutable technique
      // makes the state predictable.
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.result,
        }),
      };
    case actionType.REMOVE_RESULT:
      // 1st WAY
      // const id = 1;
      // const newArray = [...state.results];
      // newArray.splice(id, 1)

      // 2nd WAY - Most common
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElementId
      );
      return {
        ...state,
        results: updatedArray,
      };
    default:
      return state;
  }
};

export default resultReducer;
