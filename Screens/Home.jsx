import {
  View,
  StyleSheet,
  ToastAndroid,
  BackHandler,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  faPlay,
  faUsers,
  faGamepad,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import BottomButtons from "./BottomButtons";
import CustomButton from "./CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

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
      <View style={{flexDirection:"row",justifyContent:"flex-end",margin:25}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Setting");
          }}
        >
          <FontAwesomeIcon icon={faCog} size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={[styles.container, { marginBottom: 50 }]}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../assets/neverhaveiever.png")}
        />
      </View>
      <View style={[styles.container]}>
        <CustomButton
          title="Play"
          sendRedirect={() => {
            navigation.navigate("Deck");
          }}
          color="#32a852"
          icon={faPlay}
        />
        <CustomButton
          title="Multiplayer"
          sendRedirect={() => {
            ToastAndroid.show("Multiplayer comming soon", ToastAndroid.SHORT);
          }}
          color="#a83232"
          icon={faUsers}
        />
        <CustomButton
          sendRedirect={() => {
            ToastAndroid.show("How to play", ToastAndroid.SHORT);
          }}
          title="How to Play"
          color="#a6a832"
          icon={faGamepad}
        />
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
});
