import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Linking,
  Share,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather, Entypo } from "@expo/vector-icons";
import { DataContext } from "../../context/dataContext";

const SanMichele = () => {
  const navigation = useNavigation();
  const [data, setData] = useContext(DataContext);

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "Siamo qui!",
        message:
          "http://www.cagliariturismo.it/it/luoghi/i-luoghi-della-storia-316/monumenti-80/castello-di-san-michele-76",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        source={data[1].image}
        style={styles.image}
        imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      />
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => navigation.navigate("Home")}
      >
        <Feather name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.shareIcon} onPress={onShare}>
        <Entypo name="share" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mapIcon}
        onPress={() =>
          Linking.openURL(
            "https://www.google.it/maps/place/Castello+di+San+Michele+Cagliari/@39.2425925,9.1107069,17z/data=!3m1!4b1!4m5!3m4!1s0x12e73425140d3a27:0x91e5666d9310f982!8m2!3d39.2425884!4d9.1128956?hl=it&authuser=0"
          )
        }
      >
        <Feather name="map" size={24} color="white" />
      </TouchableOpacity>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
          Castello di San Michele
        </Text>
        <Text style={styles.text}>
          Risalente al periodo giudicale, il Castello di San Michele si erge
          sulla cima dell'omonimo colle.
        </Text>
        <Text style={styles.text}>
          Il complesso consta di tre torri e un fossato che circonda la
          struttura. La sua funzione era prettamente difensiva: doveva infatti
          prevenire e coordinare le difese in caso di invasione della città di
          Santa Igia, capitale dell'antico giudicato di Cagliari.
        </Text>
        <Text style={styles.text}>
          Divenne fulcro centrale delle attività cittadine nel periodo in cui fu
          abitato dalla nobile famiglia spagnola dei Carroz.
        </Text>
        <Text style={styles.text2}>
          Agli inizi del 1500 fu abbandonato, e da allora i suoi usi sono stati
          molteplici. Assolse la funzione di lazzaretto, durante l'epidemia di
          peste (1652-1656) per poi tornare a rivestire, pochi anni dopo, i
          panni di difensore della città dagli attacchi francesi. Durante la
          seconda guerra mondiale fu presidio della Regia Marina per poi
          passare, al termine di quest'ultima, nelle mani del Comune.
          Attualmente è adibito a centro culturale.
        </Text>
        <FlatList
          horizontal={true}
          data={data[1].gallery}
          style={{
            paddingLeft: 20,
            paddingTop: 0,
          }}
          renderItem={({ item }) => <Image source={item} style={styles.imgs} />}
        />
        <Text
          style={{
            paddingTop: 20,
            paddingLeft: 20,
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Info
        </Text>
        <Text style={styles.text}>
          Le visite al Castello si svolgono dal lunedì al venerdì dalle 9 alle
          18. L'ingresso alle mostre è contingentato ad un massimo di 10
          visitatori ogni ora. Si raccomanda pertanto la prenotazione.
        </Text>
        <Text style={styles.text1}>Ingresso libero al parco.</Text>
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
  image: {
    height: 380,
    justifyContent: "flex-end",
  },
  backIcon: {
    position: "absolute",
    left: 20,
    top: 50,
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
  shareIcon: {
    position: "absolute",
    right: 20,
    top: 50,
    backgroundColor: "#009fd4",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
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
  mapIcon: {
    position: "absolute",
    right: 20,
    top: 350,
    backgroundColor: "#009fd4",
    padding: 16,
    borderRadius: 40,
    zIndex: 2,
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
  imgs: {
    width: 150,
    height: 200,
    marginRight: 15,
    borderRadius: 10,
  },
  text1: {
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 14,
    fontWeight: "normal",
    opacity: 0.5,
    justifyContent: "flex-start",
    textAlign: "justify",
    lineHeight: 26,
    marginBottom: 20,
  },
  text2: {
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 14,
    fontWeight: "normal",
    opacity: 0.5,
    justifyContent: "flex-start",
    textAlign: "justify",
    lineHeight: 26,
    marginBottom: -20,
  },
});

export default SanMichele;
