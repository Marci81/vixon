import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import shopReducer from "./shop/shop.reducer";
import cartReducer from "./cart/cart.reducer";
import searchReducer from "./search/search.reducer";
import alertReducer from "./alert/alert.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer,
  search: searchReducer,
  alert: alertReducer,
  user: userReducer
});

export default persistReducer(persistConfig, rootReducer);
