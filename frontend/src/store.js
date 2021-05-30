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
  userListReducer,
  userDeleteReducer,
} from "./reducers/userReducer";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderPayReducer,
} from "./reducers/orderReducers";

const reducer = combineReducers({
  productList: producytListReducer,
  productDetails: producytDeatailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
});

const userInfo = localStorage.getItem(`userInfo`);
const cartData = localStorage.getItem(`cartItems`);
const shippingAddress = localStorage.getItem(`shippingAddress`);
const paymentMethod = localStorage.getItem(`paymentMethod`);

const userInfoFromLocalStorage = userInfo ? JSON.parse(userInfo) : null;
const cartItemsFromLocalStorage = cartData ? JSON.parse(cartData) : [];
const paymentMethodFromLocalStorage = paymentMethod
  ? JSON.parse(paymentMethod)
  : "Not Selected";
const shippingAddressFromLocalStorage = shippingAddress
  ? JSON.parse(shippingAddress)
  : {};

const intialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
    paymentMethod: paymentMethodFromLocalStorage,
  },
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
