import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Header from "../components/Header";
import Trending from "../components/Trending";
import Places from "../components/Places";

const Home = () => {
  return (
    <View style={{ flexGrow: 1, height: "100%" }}>
      <ScrollView>
        <Header />
        <Trending />
        <Places />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
