import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductsOverviewScreen, {
  screenOptions as ProductsOverviewScreenOptions,
} from "../screens/shop/ProductsOverviewScreen";
import Colors from "../constants/colors";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: Colors.primary,
    height: 100,
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const ProductsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={ProductsOverviewScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default ProductsNavigator;
