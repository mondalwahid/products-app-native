import React from "react";
import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Gobackicon from "@expo/vector-icons/Ionicons";
import BagIcon from "@expo/vector-icons/SimpleLineIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useGetProductDetailsQuery } from "../src/redux/productDetails";
import { useDispatch } from "react-redux";
import { addToCart } from "../src/redux/cartSlice";
import { useSelector } from "react-redux";
import { selectCartItems } from "../src/redux/cartSlice";

const ProductDetails = () => {
  const cartItems = useSelector(selectCartItems);
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    data: productDetails,
    isLoading,
    error,
  } = useGetProductDetailsQuery({ id: route.params.id });

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  return (
    <SafeAreaView>
      <ScrollView
        style={{ backgroundColor: "#fff", height: "100%" }}
        contentContainerStyle={{ paddingVertical: 30 }}
      >
        {/* Main header with title and navigation buttons */}
        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: "#f8f9fb",
                width: 40,
                height: 40,
                borderRadius: 40 / 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Gobackicon name="chevron-back" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ position: "relative" }}
              onPress={() =>
                navigation.navigate("ShoppingCart", {
                  screen: "ShoppingCart",
                })
              }
            >
              <BagIcon name="handbag" size={24} color="#000" />
              <View
                style={{
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
                }}
              >
                <Text
                  style={{ color: "#fff", fontWeight: "600", fontSize: 14 }}
                >
                  {cartItems?.length}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Title and subtitle */}
          <View>
            <Text style={{ fontSize: 50, fontWeight: "300", color: "#1E222B" }}>
              {productDetails?.title}
            </Text>
            <Text style={{ fontSize: 50, fontWeight: "800", color: "#1E222B" }}>
              by {productDetails?.brand}
            </Text>
          </View>

          {/* Product rating below */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <StarRatingDisplay
              readOnly={true}
              rating={productDetails?.rating}
              emptyColor="#000"
              starSize={20}
            />
            <Text style={{ color: "#A1A1AB", fontSize: 14, fontWeight: "400" }}>
              110 Reviews
            </Text>
          </View>
        </View>

        {/* Product slider below */}
        <View
          style={{
            width: "100%",
            height: 207,
            backgroundColor: "#f8f9fb",
            marginTop: 20,
          }}
        >
          <Text>Product slider here</Text>
        </View>

        {/* Prices, discounts and checkout and add to cart buttons */}
        <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
          {/* Price and discount */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 16, color: "#2A4BA0" }}>
              ${productDetails?.price}
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 16, color: "#2A4BA0" }}>
              /KG
            </Text>
            <View
              style={{
                backgroundColor: "#2A4BA0",
                paddingVertical: 4,
                paddingHorizontal: 10,
                borderRadius: 70,
                marginLeft: 20,
              }}
            >
              <Text style={{ color: "#FAFBFD" }}>
                {Math.ceil(productDetails?.discountPercentage)}% OFF
              </Text>
            </View>
          </View>

          {/* Add to cart and checkout button */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 30,
            }}
          >
            <TouchableOpacity
              onPress={() => handleAddToCart(productDetails)}
              activeOpacity={0.7}
              style={{
                borderWidth: 1,
                borderColor: "#2A4BA0",
                borderRadius: 20,
                width: "45%",
                height: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textTransform: "capitalize",
                  color: "#2A4BA0",
                  fontSize: 14,
                  fontWeight: "600",
                }}
              >
                add to cart
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                borderRadius: 20,
                backgroundColor: "#2A4BA0",
                width: "45%",
                height: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textTransform: "capitalize",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: "600",
                }}
              >
                buy now
              </Text>
            </TouchableOpacity>
          </View>

          {/* Details and description */}
          <View>
            <Text style={{ color: "#1E222B", fontSize: 16, fontWeight: "400" }}>
              Details
            </Text>
            <Text
              style={{
                color: "#8891A5",
                fontSize: 16,
                fontWeight: "400",
                marginTop: 5,
              }}
            >
              {productDetails?.description}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
