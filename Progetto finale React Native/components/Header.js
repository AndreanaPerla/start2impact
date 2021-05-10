import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import image from "../assets/intro-cagliari.jpg";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        source={image}
        style={{ width: "100%", height: 350 }}
        imageStyle={{ borderBottomRightRadius: 65 }}
      >
        <View style={styles.DarkOverlay}></View>
        <View style={styles.welcome}>
          <Text style={styles.visit}>Visit Cagliari</Text>
          <Text style={styles.benvenuti}>Benvenutə nella città del sole!</Text>
        </View>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.openDrawer()}
        >
          <Feather name="menu" size={25} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  DarkOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 350,
    backgroundColor: "#000",
    opacity: 0.2,
    borderBottomRightRadius: 65,
  },
  welcome: {
    paddingTop: 160,
    paddingLeft: 20,
  },
  visit: {
    fontSize: 38,
    fontWeight: "bold",
    color: "white",
  },
  benvenuti: {
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "normal",
    color: "white",
  },
  menuIcon: {
    position: "absolute",
    top: 45,
    left: 15,
    backgroundColor: "#009fd4",
    padding: 10,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5.5,
    elevation: 9,
  },
});

export default Header;
