import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ToastAndroid,
  Image,
} from "react-native";

function BottomButtonSettings() {
  return (
    <View style={styles.bottomButtonsContainer}>
      <TouchableOpacity
        onPress={() => {
          ToastAndroid.show("More Games", ToastAndroid.SHORT);
        }}
      >
        <View style={styles.smallButton}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../assets/games-control-svgrepo-com.png")}
          />
          <Text style={styles.smallButtonText}>More Games</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          ToastAndroid.show("Follow Us", ToastAndroid.SHORT);
        }}
      >
        <View style={styles.smallButton}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../assets/followus.png")}
          />
          <Text style={styles.smallButtonText}>Follow Us</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default BottomButtonSettings;
const styles = StyleSheet.create({
  bottomButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 60,
    left: 20,
    right: 20,
  },
  smallButton: {
    flexDirection: "row",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#4d4d4d",
  },

  smallButtonText: {
    color: "white",
    marginLeft: 5,
  },
});
