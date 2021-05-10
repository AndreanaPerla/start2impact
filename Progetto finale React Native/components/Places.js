import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Foundation, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DataContext } from "../context/dataContext";

const Places = () => {
  const navigation = useNavigation();
  const [data, setData] = useContext(DataContext);
  const placesData = data.slice(4, 14);

  return (
    <View style={{ marginBottom: 20 }}>
      <View style={{ paddingLeft: 20, paddingTop: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          I luoghi del <View></View>
          <Foundation name="heart" size={22} color="red" />
        </Text>
      </View>
      <View>
        <FlatList
          data={placesData}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  paddingVertical: 15,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate(item.route)}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "90%",
                      height: 250,
                      borderRadius: 10,
                      alignSelf: "center",
                    }}
                  />
                  <View style={styles.placesOverlay}></View>
                  <FontAwesome
                    name="map-marker"
                    size={24}
                    color="white"
                    style={styles.placesIcon}
                  />
                  <Text style={styles.placesTitle}>{item.title}</Text>
                  <Text style={styles.placesDescription}>
                    {item.description}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
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
  placesOverlay: {
    width: "90%",
    height: 250,
    borderRadius: 10,
    alignSelf: "center",
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.2,
  },
  placesIcon: {
    position: "absolute",
    marginTop: 4,
    left: 35,
    bottom: 52,
  },
  placesTitle: {
    position: "absolute",
    color: "white",
    marginTop: 4,
    fontSize: 20,
    left: 55,
    bottom: 50,
  },
  placesDescription: {
    position: "absolute",
    color: "white",
    width: "75%",
    marginTop: 4,
    fontSize: 14,
    left: 55,
    bottom: 10,
  },
});

export default Places;
