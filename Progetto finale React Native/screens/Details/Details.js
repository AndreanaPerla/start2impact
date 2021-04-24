import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { data } from "../../components/data";
import Card from "./Card";

const Details = () => {
  return (
    <View>
      {data.map((item, i) => {
        return <Card key={i} image={item.image} />;
      })}
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

export default Details;
