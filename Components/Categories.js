import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Food",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
  },
];

export default function Categories() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((data, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#fff",
              paddingHorizontal: 15,
              paddingVertical: 10,
              marginTop: 5,
              alignItems: "center",
            }}
          >
            <Image
              source={data.image}
              style={{ width: 50, height: 40, resizeMode: "contain" }}
            />
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
              {data.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
