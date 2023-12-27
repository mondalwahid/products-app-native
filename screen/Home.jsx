import React from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import BagIcon from "@expo/vector-icons/SimpleLineIcons";
import SearchIcon from "@expo/vector-icons/AntDesign";
import ArrowDownIcon from "@expo/vector-icons/AntDesign";
import Products from "../src/components/Products";
import { useGetProductsListQuery } from "../src/redux/products";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCartItems } from "../src/redux/cartSlice";

const Home = () => {
  const cartItems = useSelector(selectCartItems);
  const navigation = useNavigation();
  const { data: productList, isLoading, error } = useGetProductsListQuery();
  return (
    <SafeAreaView>
      <ScrollView
        style={{ height: "100%", backgroundColor: "#fff" }}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View style={styles.MainHeaderContainer}>
          {/* Name header */}
          <View style={styles.NameHeaderContainer}>
            <Text style={styles.NameTextStyles}>Hey, Wahid</Text>
            <TouchableOpacity
              style={{ position: "relative" }}
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate("ShoppingCart", {
                  screen: "ShoppingCart",
                })
              }
            >
              <BagIcon name="handbag" size={24} color="#fff" />
              <View style={styles.AddtoCartCountContainer}>
                <Text
                  style={{ color: "#fff", fontWeight: "600", fontSize: 14 }}
                >
                  {cartItems?.length}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Searchbar */}
          <View style={styles.MainSearcBarContainer}>
            <SearchIcon
              name="search1"
              size={18}
              color="#fff"
              style={{ marginLeft: 25, marginRight: 15 }}
            />
            <Text style={styles.PlaceHolderStyles}>
              Search Products or Store
            </Text>
          </View>

          {/* Dropdowns */}
          <View style={styles.DropdownContainer}>
            <View>
              <Text style={styles.DropdownText}>Delivery to</Text>
              <Text style={styles.SubDropdownText}>Green Way 3000, Sylhet</Text>
            </View>
            <View>
              <Text style={styles.DropdownText}>Within</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.SubDropdownText}>1 Hour</Text>
                <ArrowDownIcon
                  name="down"
                  size={15}
                  color="#90a2cd"
                  style={{ marginLeft: 10 }}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Offer Slider */}
        <ScrollView
          horizontal={true}
          contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 25 }}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.OfferSliderContainer}>
            <Image
              source={require("../assets/Image-icon.png")}
              resizeMode={"cover"}
              style={{ width: 65, height: 65 }}
            />
            <View>
              <Text style={styles.OfferTextOne}>get</Text>
              <Text style={styles.OfferTextTwo}>50% OFF</Text>
              <Text style={styles.OffertextThree}>on first 03 order</Text>
            </View>
          </View>

          <View style={styles.OfferSliderContainerTwo}>
            <Image
              source={require("../assets/Image-icon.png")}
              resizeMode={"cover"}
              style={{ width: 65, height: 65 }}
            />
            <View>
              <Text style={styles.OfferTextOne}>get</Text>
              <Text style={styles.OfferTextTwo}>50% OFF</Text>
              <Text style={styles.OffertextThree}>on first 03 order</Text>
            </View>
          </View>
        </ScrollView>

        {/* Recommended products list */}
        <View style={{ paddingLeft: 20 }}>
          <Text style={styles.ProductHeaderText}>Recommended</Text>
          <Products
            listData={productList}
            isLoading={isLoading}
            error={error}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

// styles below

const styles = StyleSheet.create({
  MainHeaderContainer: {
    width: "100%",
    height: 252,
    backgroundColor: "#2a4ba0",
    paddingHorizontal: 25,
    paddingBottom: 25,
    paddingTop: 35,
    display: "flex",
    justifyContent: "space-between",
  },

  NameHeaderContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  NameTextStyles: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
  },
  MainSearcBarContainer: {
    backgroundColor: "#153175",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    borderRadius: 28,
  },
  PlaceHolderStyles: {
    color: "#8891A5",
    fontSize: 14,
  },
  DropdownContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  DropdownText: {
    color: "#90a2cd",
    fontWeight: "800",
    fontSize: 11,
    textTransform: "uppercase",
  },
  SubDropdownText: {
    fontWeight: "500",
    fontSize: 14,
    color: "#F8F9FB",
  },
  OfferSliderContainer: {
    height: 123,
    width: 269,
    backgroundColor: "#f9b023",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginRight: 20,
  },
  OfferSliderContainerTwo: {
    height: 123,
    width: 269,
    backgroundColor: "#e4ddcb",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  OfferTextOne: {
    textTransform: "capitalize",
    fontSize: 20,
    color: "#fff",
    fontWeight: "300",
  },
  OfferTextTwo: {
    fontWeight: "800",
    fontSize: 26,
    color: "#fff",
  },
  OffertextThree: {
    fontSize: 13,
    fontWeight: "500",
    color: "#fff",
  },
  ProductHeaderText: {
    fontSize: 30,
    fontWeight: "400",
    color: "#1E222B",
  },
  AddtoCartCountContainer: {
    width: 22,
    height: 22,
    borderRadius: 22 / 2,
    backgroundColor: "#f9b023",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "-25%",
    right: "-40%",
  },
});
