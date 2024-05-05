import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import BottomButtonSettings from "./BottomButtonSettings";

const Setting = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleDiv}>
        <Image
          source={require("../assets/Settingsicon.png")}
          style={[{ marginRight:20,width:35,height:35,resizeMode:"stretch"}]}
        />
        <Text style={styles.title}>SETTINGS</Text>
      </View>
      <View style={styles.setting}>
        <TouchableOpacity>
          <View style={styles.circle}>
            <Image
              source={require("../assets/music_icon.png")}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.circle}>
            <Image
              source={require("../assets/info2.png")}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.language}>
        <Text style={styles.text}>Languages </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}> Eng (US) </Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/languageflag.png")}
          />
        </View>
        <TouchableOpacity>
          <Image
            source={require("../assets/triangle-right-svgrepo-com.png")}
            style={styles.icon2}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.kidMode}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../assets/kidmode.png")}
        />
        <Text style={styles.text}>Kid Mode</Text>
        <Text style={styles.text}>{isEnabled ? "on" : "off"}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#001c37" }}
          thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.purchases}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../assets/purchases.png")}
        />
        <Text style={styles.text}>Purchases</Text>
        <TouchableOpacity>
          <Image
            source={require("../assets/triangle-right-svgrepo-com.png")}
            style={styles.icon2}
          />
        </TouchableOpacity>
      </View>

      <BottomButtonSettings />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  titleDiv: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4d4d4d",
    padding: 10,
    marginBottom: 35,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  setting: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 25,
    marginRight: 25,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode:"stretch"

  },
  icon2: {
    width: 20,
    height: 30,
    resizeMode:"stretch"
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#4d4d4d",
    justifyContent: "center",
    alignItems: "center",
  },
  language: {
    flexDirection: "row",
    backgroundColor: "#9eda3c",
    padding: 10,
    margin: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
  kidMode: {
    flexDirection: "row",
    backgroundColor: "#ee6e6e",
    padding: 10,
    margin: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },

  purchases: {
    flexDirection: "row",
    backgroundColor: "#3bb4b4",
    padding: 10,
    margin: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    fontWeight: "700",
  },
});

export default Setting;
