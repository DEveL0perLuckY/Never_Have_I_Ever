import {
  View,
  StyleSheet,
  ToastAndroid,
  BackHandler,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import BottomButtons from "./BottomButtons";

function Home({ navigation }) {
  const [backButtonPressedOnce, setBackButtonPressedOnce] = useState(false);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (navigation.isFocused()) {
          if (!backButtonPressedOnce) {
            ToastAndroid.show("Press back again to exit", ToastAndroid.SHORT);
            setBackButtonPressedOnce(true);

            setTimeout(() => {
              setBackButtonPressedOnce(false);
            }, 2000);

            return true;
          } else {
            BackHandler.exitApp();
            return true;
          }
        }
        return false;
      }
    );

    return () => backHandler.remove();
  }, [backButtonPressedOnce, navigation]);

  return (
    <View style={styles.root}>
      <View
        style={{ flexDirection: "row", justifyContent: "flex-end", margin: 25 }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Setting");
          }}
        >
          <Image
            source={require("../assets/Settingsicon.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.container, { marginBottom: 50 }]}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../assets/neverhaveiever.png")}
        />
      </View>
      <View style={[styles.container]}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("Deck");
          }}
          style={[styles.button, { backgroundColor: "#9eda3c" }]}
        >
          <Image
            source={require("../assets/playButton.png")}
            style={styles.icon}
          />
          <Text style={{ color: "#001c37",fontWeight:"bold", fontSize: 25 }}>PLAY</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("GlobalChat")
          }}
          style={[styles.button, { backgroundColor: "#eb7171" }]}
        >
          <Image
            source={require("../assets/multiplayer.png")}
            style={styles.icon}
          />
          <Text style={{ color: "#001c37",fontWeight:"bold", fontSize: 25 }}>MULTIPLAYER</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            ToastAndroid.show("How to play", ToastAndroid.SHORT);
          }}
          style={[styles.button, { backgroundColor: "#e0c461" }]}
        >
          <Image
            source={require("../assets/howtoplay.png")}
            style={styles.icon}
          />

          <Text style={{ color: "#001c37",fontWeight:"bold", fontSize: 25 }}>HOW TO PLAY</Text>
        </TouchableOpacity>
      </View>
      <BottomButtons />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    resizeMode: "stretch",
    height: 35,
    width: 35,
  },
  button: {
    flexDirection: "row",
    width: 230,
    margin: 10,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-evenly",
    
  },
});
