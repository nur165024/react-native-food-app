import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import BottomTabs from "../Components/BottomTabs";
import Categories from "../Components/Categories";
import HeaderTabs from "../Components/HeaderTabs";
import RestaurantItem, { localRestaurants } from "../Components/RestaurantItem";
import SearchBar from "../Components/SearchBar";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  return (
    <SafeAreaView style={styles.headerTabs}>
      <View style={styles.innerView}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <SafeAreaView>
        <ScrollView>
          <Categories />
          <RestaurantItem restaurantData={restaurantData} />
        </ScrollView>
      </SafeAreaView>
      {/* <Divider width={1} /> */}
      <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerTabs: {
    flex: 1,
    backgroundColor: "#eee",
  },
  innerView: {
    backgroundColor: "#fff",
    padding: 15,
    paddingTop: 25,
  },
});
