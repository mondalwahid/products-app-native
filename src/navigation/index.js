import React from "react";
import ProductDetails from "../../screen/ProductDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screen/Home";
import ShoppingCart from "../../screen/ShoppingCart";

const Stack = createNativeStackNavigator();

const AppNavigationContainer = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
    </Stack.Navigator>
  );
};

export default AppNavigationContainer;
