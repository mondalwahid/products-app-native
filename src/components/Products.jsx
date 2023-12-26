import React from "react";
import { useDispatch } from "react-redux";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import AddToCartIcon from "@expo/vector-icons/AntDesign";
import WishlistIcon from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { addToCart } from "../redux/cartSlice";

const Products = ({ listData }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function handleAddToCartItem(product) {
    dispatch(addToCart(product));
  }

  function handleProductNavigation(id) {
    navigation.navigate("ProductDetails", {
      screen: "ProductDetails",
      id: id,
    });
  }
  return (
    <View style={styles.MainProductsContainer}>
      {listData?.products?.map((e) => {
        return (
          <TouchableOpacity
            onPress={() => handleProductNavigation(e?.id)}
            key={e?.id}
            style={styles.SubProductsContainer}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.WishlistMainContainer}
            >
              <WishlistIcon name="hearto" size={24} color="red" />
            </TouchableOpacity>
            <View style={styles.ImageContainer}>
              <Image
                source={{ uri: e?.thumbnail }}
                resizeMode={"cover"}
                style={styles.ImageStyles}
              />
            </View>

            {/* Product title and prices */}
            <View style={styles.ProductAndTitlePricesContainer}>
              <View>
                <Text style={styles.PrcieStyles}>${e?.price}</Text>
                <Text style={styles.TitleStyles}>{e?.title}</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleAddToCartItem(e)}
              >
                <AddToCartIcon name="pluscircle" size={24} color="#2a4b9f" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Products;

// Styles below

const styles = StyleSheet.create({
  MainProductsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  SubProductsContainer: {
    marginTop: 10,
    backgroundColor: "#F8F9FB",
    width: "45%",
    borderRadius: 12,
    height: 240,
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    marginRight: 10,
    paddingBottom: 25,
  },
  WishlistMainContainer: {
    position: "absolute",
    left: "5%",
    top: "5%",
    zIndex: 99,
  },
  ImageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  ImageStyles: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  ProductAndTitlePricesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
  },
  PrcieStyles: {
    color: "#1E222B",
    fontSize: 14,
    fontWeight: "600",
  },
  TitleStyles: {
    color: "#616A7D",
    fontSize: 12,
    fontWeight: "400",
  },
});
