import React from "react";
import { ImageBackground, StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Setting from "./Screens/Setting";
import Deck from "./Screens/Deck";
import CustomHeader from "./Screens/CustomHeader";

const Stack = createNativeStackNavigator();
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
export default function App() {
  return (
    <View style={styles.root}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <ImageBackground
        source={require("./assets/BgImg.jpg")}
        style={styles.backgroundImage}
        imageStyle={styles.image}
      >
        <NavigationContainer theme={navTheme}>
          <Stack.Navigator
            screenOptions={{
              headerTransparent: true,
              headerStyle: { backgroundColor: "transparent" },
              headerTitle: "",
            }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={({ navigation }) => ({
                headerRight: () => (
                  <CustomHeader
                    onPress={() => navigation.navigate("Setting")}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="Deck"
              options={{ headerShown: false }}
              component={Deck}
            />
            <Stack.Screen
              name="Setting"
              options={{ headerShown: false }}
              component={Setting}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  image: {
    opacity: 3,
  },
});
