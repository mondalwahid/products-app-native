import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./products";
import { productDetailsApi } from "./productDetails";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  [productDetailsApi.reducerPath]: productDetailsApi.reducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(productDetailsApi.middleware),
});
setupListeners(store.dispatch);
