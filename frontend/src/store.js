import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  producytDeatailsReducer,
  producytListReducer,
} from "./reducers/productReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  productList: producytListReducer,
  productDetails: producytDeatailsReducer,
  cart: cartReducer,
});

const cartData = localStorage.getItem(`cartItems`);

const cartItemsfromLocalStorage = cartData ? JSON.parse(cartData) : [];

const intialState = {
  cart: { cartItems: cartItemsfromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
