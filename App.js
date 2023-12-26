import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import AppNavigationContainer from "./src/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="Home"
            options={{
              title: "View",
            }}
            component={Home}
          />
          <Tab.Screen
            name="Categories"
            options={{
              title: "Categories",
              headerTitleAlign: "center",
            }}
            component={Categories}
          />
          <Tab.Screen
            name="Favourites"
            options={{
              title: "Favourites",
              headerTitleAlign: "center",
            }}
            component={Favourites}
          />
          <Tab.Screen
            name="More"
            options={{
              title: "More",
              headerTitleAlign: "center",
            }}
            component={More}
          />
        </Tab.Navigator> */}
        <AppNavigationContainer />
      </NavigationContainer>
    </Provider>
  );
}
