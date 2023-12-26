import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShoppingCart from "../../screen/ShoppingCart";

const ShoppingCart = createNativeStackNavigator();

const ShoppingCartNavigation = () => {
  return (
    <ShoppingCart.Navigator
      initialRouteName="ShoppingCart"
      screenOptions={{ headerShown: false }}
    >
      <ShoppingCart.Screen name="ShoppingCart" component={ShoppingCart} />
    </ShoppingCart.Navigator>
  );
};

export default ShoppingCartNavigation;
