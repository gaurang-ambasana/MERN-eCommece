import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  producytDeatailsReducer,
  producytListReducer,
} from "./reducers/productReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducer";

const reducer = combineReducers({
  productList: producytListReducer,
  productDetails: producytDeatailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

const userInfo = localStorage.getItem(`userInfo`);
const cartData = localStorage.getItem(`cartItems`);

const userInfoFromLocalStorage = userInfo ? JSON.parse(userInfo) : null;
const cartItemsFromLocalStorage = cartData ? JSON.parse(cartData) : [];

const intialState = {
  cart: { cartItems: cartItemsFromLocalStorage },
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
