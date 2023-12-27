// AppNavigationContainer.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screen/Home";
import ProductDetails from "../../screen/ProductDetails";
import ShoppingCart from "../../screen/ShoppingCart";
import Categories from "../../screen/Categories";
import Favourites from "../../screen/Favourites";
import More from "../../screen/More";
import { TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MoreIcon from "react-native-vector-icons/Entypo";
import CategoriesIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CustomTabBarButton = ({
  accessibilityLabel,
  onPress,
  onLongPress,
  icon,
  isFocused,
}) => (
  <TouchableOpacity
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      elevation: isFocused ? 5 : 0, // Apply elevation only when the tab is focused
    }}
    onPress={onPress}
    onLongPress={onLongPress}
  >
    <View
      style={{
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 15,
      }}
    >
      {icon}
    </View>
  </TouchableOpacity>
);

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          left: 20,
          right: 20,
          elevation: route.name === "Home" ? 8 : 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
        tabBarActiveTintColor: route.name === "Home" ? "#2a4ba0" : "#999",
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={28}
              color={focused ? "#2a4ba0" : "#999"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({ focused }) => (
            <CategoriesIcon
              name="dots-grid"
              size={28}
              color={focused ? "#2a4ba0" : "#999"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="heart"
              size={24}
              color={focused ? "#2a4ba0" : "#999"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ focused }) => (
            <MoreIcon
              name="dots-three-vertical"
              size={24}
              color={focused ? "#2a4ba0" : "#999"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = {
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
};

export default TabNavigation;
