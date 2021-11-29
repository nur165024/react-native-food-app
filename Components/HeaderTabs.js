import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HeaderTabs() {
  const [activeBtn, setActiveBtn] = useState("Delivery");

  return (
    <View style={styles.container}>
      <HeaderButton
        title="Delivery"
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
      />
      <HeaderButton
        title="Pickup"
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
      />
    </View>
  );
}

// header button
const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeBtn === props.title ? "#000" : "#fff",
      paddingVertical: 6,
      paddingHorizontal: 15,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveBtn(props.title)}
  >
    <Text
      style={{
        fontSize: 15,
        fontWeight: "bold",
        color: props.activeBtn === props.title ? "#fff" : "#000",
      }}
    >
      {props.title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
