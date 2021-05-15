import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { producytListReducer } from "./reducers/productReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  productList: producytListReducer,
});

const intialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
