import React from "react";
import "react-native-gesture-handler";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import ReduxThunk from "redux-thunk";
//import { composeWithDevTools } from "redux-devtools-extension";

import productsReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
import ordersReducer from "./store/reducers/orders";
import DrawerNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

//const store = createStore(rootReducer, composeWithDevTools);
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}
