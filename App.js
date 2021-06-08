import React from "react";
import "react-native-gesture-handler";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
//import { composeWithDevTools } from "redux-devtools-extension";

import productsReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
import ProductsNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

//const store = createStore(rootReducer, composeWithDevTools);
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ProductsNavigator />
      </NavigationContainer>
    </Provider>
  );
}
