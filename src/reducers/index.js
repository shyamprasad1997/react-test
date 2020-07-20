import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

import rootReducer from "./rootReducer.js";

const reducer = combineReducers({
  rootReducer,
  form: reduxFormReducer
});

export default reducer;
