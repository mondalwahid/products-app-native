import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { selectCartItems } from "../src/redux/cartSlice";

import NegativeIcon from "@expo/vector-icons/AntDesign";
import PlusIcon from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import CartHeader from "../src/components/CartHeader";
import Bottombar from "../src/components/Bottombar";

const ShoppingCart = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  return (
    <SafeAreaView>
      <View style={{ position: "relative" }}>
        <ScrollView
          stickyHeaderIndices={[0]}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 280,
            minHeight: "100%",
            backgroundColor: "#fff",
          }}
        >
          {/* header */}
          <CartHeader navigation={navigation} cartItems={cartItems} />

          {/* Cart content */}
          {cartItems?.map((e) => {
            return (
              <>
                <View style={styles.MainCartContainer} key={e?.id}>
                  <View style={styles.SubCartContainer}>
                    <Image
                      source={require("../assets/Image-icon-2.png")}
                      resizeMode={"cover"}
                      style={{ width: 30, height: 30 }}
                    />
                    <View style={{ marginLeft: 25 }}>
                      <Text style={styles.TitleStyles}>{e?.title}</Text>
                      <Text style={styles.PriceStyles}>${e?.price}</Text>
                    </View>
                  </View>

                  {/* Increment and decrement counter */}
                  <View style={styles.CounterContainer}>
                    <TouchableOpacity style={styles.DecrementContainer}>
                      <NegativeIcon name="minus" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.CounterTextStyles}>1</Text>
                    <TouchableOpacity style={styles.IncrementContainer}>
                      <PlusIcon name="plus" size={24} color="#000" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.DividerStyles} />
              </>
            );
          })}
        </ScrollView>

        {/* Bottom Bar below */}
        <View style={styles.BottombarContainer}>
          <Bottombar />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShoppingCart;

// Styles below

const styles = StyleSheet.create({
  NavigationContainer: {
    backgroundColor: "#f8f9fb",
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  MainCartContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  SubCartContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red ",
  },
  TitleStyles: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1E222B",
  },
  PriceStyles: {
    fontSize: 14,
    fontWeight: "400",
    color: "#1E222B",
  },
  CounterContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: 120,
    justifyContent: "space-between",
  },
  DecrementContainer: {
    backgroundColor: "#F8F9FB",
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  IncrementContainer: {
    backgroundColor: "#F8F9FB",
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  CounterTextStyles: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1E222B",
  },
  DividerStyles: {
    borderWidth: 0.5,
    borderColor: "#EBEBFB",
  },
  BottombarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
