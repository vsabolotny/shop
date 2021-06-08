import React from "react";
// import "react-native-gesture-handler";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import productsReducer from "./store/reducers/products";
import ProductsNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  products: productsReducer,
});

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
