import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import image from "../assets/cagliari-sidebar-img.jpeg";

const CustomSidebar = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image source={image} style={styles.sidebarImg} />
      <Text style={styles.sidebarTitle}>Visit Cagliari</Text>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Pillole di storia"
          onPress={() => navigation.navigate("Cagliari")}
        />
        <DrawerItem
          label="Muoversi in città"
          onPress={() => navigation.navigate("Move")}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sidebarImg: {
    width: 150,
    height: 150,
    alignSelf: "center",
    borderRadius: 100,
    marginTop: 70,
    borderColor: "#009fd4",
    borderWidth: 5,
  },
  sidebarTitle: {
    textAlign: "center",
    fontSize: 27,
    color: "white",
    fontWeight: "bold",
    marginTop: 25,
    backgroundColor: "#009fd4",
    width: "80%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 9,
  },
});

export default CustomSidebar;
