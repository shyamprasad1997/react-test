import initialState from "../constants/constants.js";

const rootReducer = (state = initialState.rootReducer, action) => {
  const newState = { ...state };
  console.log(action);
  switch (action.type) {
    case "SET_FIELDA_VALUE": {
      newState.fieldAValue = action.data;
      break;
    }
    case "SET_FIELDB_VALUE": {
      newState.fieldBValue = action.data;
      break;
    }
    case "SET_CURRENCIES": {
      newState.rates = action.data;
      break;
    }
    default: {
    }
  }
  return newState;
};

export default rootReducer;
