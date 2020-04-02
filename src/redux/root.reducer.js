import { combineReducers } from "redux";
import shopReducer from "./shop/shop.reducer";

export default combineReducers({
  shop: shopReducer
});
