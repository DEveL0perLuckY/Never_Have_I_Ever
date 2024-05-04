import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ToastAndroid,
  Image,
} from "react-native";

function BottomButtons() {
  return (
    <View style={styles.bottomButtonsContainer}>
      <TouchableOpacity
        onPress={() => {
          ToastAndroid.show("Follow Us", ToastAndroid.SHORT);
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../assets/followus.png")}
          />
          <View style={styles.smallButton}>
            <Text style={styles.smallButtonText}>Follow Us</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          ToastAndroid.show("More Games", ToastAndroid.SHORT);
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../assets/moregames.png")}
          />
          <View style={styles.smallButton}>
            <Text style={styles.smallButtonText}>More Games</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default BottomButtons;
const styles = StyleSheet.create({
  bottomButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
  },
  smallButton: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
  },

  smallButtonText: {
    color: "white",
    marginLeft: 5,
  },
});
