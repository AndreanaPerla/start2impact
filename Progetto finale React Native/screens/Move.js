import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import move from "../assets/cagliari-metro.jpg";

const Move = () => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        source={move}
        style={{ width: "100%", height: 300 }}
        imageStyle={{ borderBottomLeftRadius: 65 }}
      >
        <TouchableOpacity
          style={styles.homeIcon}
          onPress={() => navigation.goBack()}
        >
          <Entypo name="home" size={25} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
          Muoversi a Cagliari
        </Text>
        <Text style={styles.text}>
          All'interno dell'hinterland cagliaritano esistono due grandi sistemi
          di trasporto locale.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 10,
            paddingTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.ctmcagliari.it/")}
          >
            <Text style={styles.text1}>CTMCagliari</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "http://arst.sardegna.it/orari_e_autolinee/servizi_metroca.html"
              )
            }
          >
            <Text style={styles.text1}>MetroCagliari</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>
          Insieme ad essi, troviamo anche il servizio di mobilità sostenibile
          rappresentato da FAST, il servizio di monopattini a noleggio dislocato
          tra le principali vie del centro.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 10,
            paddingTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => Linking.openURL("http://www.fastmobility.it/")}
          >
            <Text style={styles.text2}>FAST!</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>
          Ottimo modo per visitare la città è rappresentato dal Trenino: il suo
          percorso si disloca per tutte i luoghi simbolo di Cagliari.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 10,
            paddingTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.trenino.it/")}
          >
            <Text style={styles.text3}>Trenino</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>
          Se poi si volesse uscire fuori dalla città per far visita all'area
          metropolitana estesa, i messi sono essenzialmente due
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 10,
            paddingTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "http://www.arst.sardegna.it/orari_e_autolinee.html"
              )
            }
          >
            <Text style={styles.text4}>ARST</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.thetrainline.com/it/stazioni/cagliari"
              )
            }
          >
            <Text style={styles.text4}>Treno</Text>
          </TouchableOpacity>
        </View>
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
  homeIcon: {
    position: "absolute",
    right: 20,
    top: 50,
    backgroundColor: "#009fd4",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 13,
    paddingRight: 13,
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
  text: {
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 14,
    fontWeight: "normal",
    opacity: 0.5,
    justifyContent: "flex-start",
    textAlign: "justify",
    lineHeight: 26,
  },
  text1: {
    paddingRight: 45,
    paddingLeft: 45,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 14,
    fontWeight: "normal",
    backgroundColor: "#009fd4",
    color: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5.5,
    elevation: 9,
  },
  text2: {
    paddingRight: 165,
    paddingLeft: 165,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 14,
    fontWeight: "normal",
    backgroundColor: "#009fd4",
    color: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5.5,
    elevation: 9,
  },
  text3: {
    paddingRight: 160,
    paddingLeft: 160,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 14,
    fontWeight: "normal",
    backgroundColor: "#009fd4",
    color: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5.5,
    elevation: 9,
  },
  text4: {
    paddingRight: 70,
    paddingLeft: 70,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 14,
    fontWeight: "normal",
    backgroundColor: "#009fd4",
    color: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5.5,
    elevation: 9,
  },
});

export default Move;
