import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  ToastAndroid,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from "react-native";

function Deck({ navigation }) {
  const [isLocked, setIsLocked] = useState(true);
  const [isFunnyLocked, setIsFunnyLocked] = useState(true);
  const [isAwkwardLocked, setIsAwkwardLocked] = useState(true);
  const [isAdultLocked, setIsAdultLocked] = useState(true);

  const toggleFunnyLock = () => {
    setIsFunnyLocked(!isFunnyLocked);
  };

  const toggleAwkwardLock = () => {
    setIsAwkwardLocked(!isAwkwardLocked);
  };

  const toggleAdultLock = () => {
    setIsAdultLocked(!isAdultLocked);
  };

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.setting}>
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
          <TouchableOpacity
            onPress={() => {
              ToastAndroid.show("Info", ToastAndroid.SHORT);
            }}
          >
            <Image
              source={require("../assets/infoicon.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titleDiv}>
          <Text style={styles.title}>CHOOSE DECK</Text>
        </View>
        <View style={styles.cardList}>
          <View>
            <Image
              source={require("../assets/partyandfun.jpg")}
              style={styles.cardImage}
            />
            <View style={[styles.cardLabel, { backgroundColor: "#ffffff" }]}>
              <Text style={styles.labelText}>PARTY AND</Text>
              <Text style={styles.labelText}>FUN</Text>
            </View>
            <TouchableOpacity
              style={[styles.cardButton, { backgroundColor: "#6a5152" }]}
            >
              <Text style={styles.cardButtonText}>PLAY</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={require("../assets/food.jpg")}
              style={styles.cardImage}
            />
            <View style={[styles.cardLabel, { backgroundColor: "#ffe7cf" }]}>
              <Text style={styles.labelText}>FOOD</Text>
            </View>
            <TouchableOpacity
              style={[styles.cardButton, { backgroundColor: "#697a34" }]}
            >
              <Text style={styles.cardButtonText}>PLAY</Text>
            </TouchableOpacity>
          </View>

          <View>
            <>
              <Image
                source={require("../assets/relationship.jpg")}
                style={[styles.cardImage, { opacity: isLocked ? 0.4 : 1 }]}
              />
              <View
                style={[
                  styles.cardLabel,
                  { backgroundColor: isLocked ? "#828282" : "#ffffff" },
                ]}
              >
                <Text style={[styles.labelText]}>RELATIONSHIP</Text>
              </View>
            </>
            {isLocked && (
              <>
                <View style={styles.lockIcon}>
                  <Image source={require("../assets/lock.png")} />
                </View>
              </>
            )}
            <TouchableOpacity
              style={[styles.cardButton, { backgroundColor: "#b55454" }]}
              onPress={toggleLock}
            >
              <Text style={styles.cardButtonText}>BUY NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.wave} activeOpacity={0.8}>
        <Image
          style={styles.waveImage}
          source={require("../assets/DeckScreen.png")}
        />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#b55454",
            borderWidth: 3,
            borderColor: "white",
            borderRadius: 10,
            padding: 2,
            marginRight: 30,
          }}
        >
          <Text style={{ color: "white" }}>EXPLORE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleDiv2}>
        <Text style={styles.title}>FILTERS</Text>
      </View>

      <>
        <View style={[styles.filter, { backgroundColor: "#7cc163" }]}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 20 }}
            source={require("../assets/funny.jpg")}
          />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{ color: "#1b3c5c", fontWeight: "bold", fontSize: 23 }}
            >
              FUNNY
            </Text>
            <Text style={{ textAlign: "center" }}>110 CARDS</Text>
          </View>

          <Switch
          trackColor={{ false: "#767577", true: "#001c37" }}
          thumbColor={isFunnyLocked ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          
          value={!isFunnyLocked} onValueChange={toggleFunnyLock} />
        </View>
        <View style={[styles.filter, { backgroundColor: "white" }]}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 20 }}
            source={require("../assets/awakard.jpg")}
          />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{ color: "#1b3c5c", fontWeight: "bold", fontSize: 23 }}
            >
              AWKWARD
            </Text>
            <Text style={{ textAlign: "center" }}> 70 CARDS</Text>
          </View>

          <Switch
          trackColor={{ false: "#767577", true: "#001c37" }}
          thumbColor={isAwkwardLocked ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          
          value={!isAwkwardLocked} onValueChange={toggleAwkwardLock} />
        </View>
        <View style={[styles.filter, { backgroundColor: "white" }]}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 20,
              resizeMode: "stretch",
            }}
            source={require("../assets/addultIcon.jpg")}
          />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{ color: "#1b3c5c", fontWeight: "bold", fontSize: 23 }}
            >
              ADULT
            </Text>
            <Text style={{ textAlign: "center" }}>90 CARDS</Text>
          </View>
          <Switch
          trackColor={{ false: "#767577", true: "#001c37" }}
          thumbColor={isAdultLocked ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          
          value={!isAdultLocked} onValueChange={toggleAdultLock} />
        </View>
      </>
    </ScrollView>
  );
}

export default Deck;

const styles = StyleSheet.create({
  //main flex
  container: {
    flex: 1,
  },

  titleDiv: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },

  // settting and info styles
  setting: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 25,
  },
  icon: {
    resizeMode: "stretch",
    height: 35,
    width: 35,
  },

  //card starts

  cardList: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cardImage: {
    height: 100,
    width: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    resizeMode: "stretch",
    backgroundColor: "black",
  },

  lockIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  cardLabel: {
    flex: 2,
    justifyContent: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  labelText: {
    textAlign: "center",
    color: "#1b3c5c",
    fontWeight: "700",
  },
  cardButton: {
    marginTop: 10,
    borderRadius: 20,
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
  },
  cardButtonText: {
    color: "white",
    fontSize: 15,
  },
  wave: {
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  waveImage: {
    justifyContent: "center",
    borderRadius: 40,
    width: 320,
    height: 130,
    resizeMode: "contain",
  },
  filter: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "space-around",
  },
  
  titleDiv2: {
    alignItems: "flex-start",
    marginLeft: 20,
  },
});
