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
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { data } from "./data";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Trending = () => {
  const navigation = useNavigation();

  const trendingData = data.slice(0, 4);

  return (
    <View>
      <ScrollView>
        <View style={{ paddingLeft: 20, paddingTop: 15 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>In tendenza</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={trendingData}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    paddingVertical: 15,
                    paddingLeft: 20,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate(item.route)}
                  >
                    <Image
                      source={item.image}
                      style={{
                        width: 160,
                        height: 260,
                        marginRight: 5,
                        borderRadius: 10,
                      }}
                    />
                    <View style={styles.imageOverlay}></View>
                    <FontAwesome
                      name="map-marker"
                      size={20}
                      color="white"
                      style={styles.imgIcon}
                    />
                    <Text style={styles.imgTitle}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageOverlay: {
    width: 160,
    height: 260,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.2,
  },
  imgIcon: {
    position: "absolute",
    marginTop: 4,
    left: 7,
    bottom: 10,
  },
  imgTitle: {
    position: "absolute",
    color: "white",
    marginTop: 4,
    fontSize: 12,
    left: 25,
    bottom: 10,
  },
});

export default Trending;
