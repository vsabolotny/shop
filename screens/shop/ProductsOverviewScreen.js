import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
    />
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "All Products",
  };
};

export default ProductsOverviewScreen;
