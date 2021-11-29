import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://www.downunder.nl/wp-content/uploads/2021/02/Restaurant-Down-Under-Nieuwegein-Utrecht-8.jpg",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
  {
    name: "Benihana",
    image_url:
      "https://media.cntraveler.com/photos/5b0dc58b96978a0573f2c239/master/w_4000,h_2667,c_limit/Ron-Gastrobarl_2018_Grace-Guino_1.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
];

export default function RestaurantItem(props) {
  return (
    <>
      {props.restaurantData.map((data, index) => (
        <TouchableOpacity activeOpacity={0.5} key={index}>
          <View style={{ padding: 15, backgroundColor: "#fff", marginTop: 10 }}>
            {/* restaurant Image */}
            <RestaurantImage image={data.image_url} />
            {/* restaurant Info */}
            <RestaurantInfo name={data.name} rating={data.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = ({ image }) => (
  <>
    <Image
      source={{
        uri: image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <AntDesign name="hearto" size={20} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = ({ name, rating }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text
        style={{
          color: "#000",
          fontSize: 13,
          fontWeight: "bold",
          marginVertical: 5,
        }}
      >
        {name}
      </Text>
      <Text style={{ fontSize: 12, color: "gray" }}>30 - 45. min</Text>
    </View>
    <Text
      style={{
        backgroundColor: "#eee",
        width: 30,
        height: 30,
        lineHeight: 25,
        textAlign: "center",
        borderRadius: 50,
        fontSize: 12,
        marginTop: 10,
      }}
    >
      {rating}
    </Text>
  </View>
);
