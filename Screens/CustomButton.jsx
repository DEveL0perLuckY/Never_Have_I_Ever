import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function CustomButton({ title, color, icon, sendRedirect }) {
  return (
    <TouchableOpacity
      onPress={sendRedirect}
      style={[styles.button, { backgroundColor: color }]}
    >
      <View
        style={{
          flexDirection: "row",
          padding: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon
          icon={icon}
          size={30}
          style={{ marginRight: 20 }}
          color="white"
        />
        <Text style={{ color: "white", fontSize: 25 }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: 230,
    borderRadius: 10,
    margin: 10,
  },
});
