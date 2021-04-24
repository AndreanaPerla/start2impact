import React, { useState } from "react";
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
import { data } from "../../components/data";
import { useNavigation } from "@react-navigation/native";
import { Feather, Entypo } from "@expo/vector-icons";

const Poetto = () => {
  const navigation = useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "Siamo qui!",
        message:
          "http://www.cagliariturismo.it/it/luoghi/i-luoghi-del-tempo-libero-317/spiagge-84/spiaggia-del-poetto-255",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const [images, setImages] = useState([
    require("../../assets/img_schede/poetto-lungomare.jpg"),
    require("../../assets/img_schede/poetto-sella-diavolo.jpg"),
    require("../../assets/img_schede/poetto-torre.jpg"),
  ]);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        source={data[4].image}
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
            "https://www.google.it/maps/place/Spiaggia+del+Poetto/@39.2091471,9.1711262,14z/data=!4m5!3m4!1s0x12e0cb51ddbbeddb:0x6faa2e32c94fb2a0!8m2!3d39.2134183!4d9.1757159?hl=it&authuser=0"
          )
        }
      >
        <Feather name="map" size={24} color="white" />
      </TouchableOpacity>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
          {data[4].title}
        </Text>
        <Text style={styles.text}>
          Il Poetto si estende per circa dodici chilometri, dalla Sella del
          Diavolo sino all'inizio del litorale di Quartu Sant'Elena. Rappresenta
          un'importante località turistica e uno dei principali luoghi di
          ritrovo della vita notturna estiva della città.
        </Text>
        <Text style={styles.text}>
          Le origini del nome sono ancora dibattute. Potrebbe derivare, infatti,
          dalla torre del Poeta di origine spagnola, i cui resti sono ancora
          visibili sulla cima della Sella del Diavolo. Oppure potrebbe trarre
          origine dal catalano pohuet (pozzetto), in riferimento alle numerose
          cisterne sparse per la Sella del Diavolo. Verosimilmente, potrebbe
          invece derivare dallo spagnolo puerto (porto), ad indicare
          l'insenatura naturale cui prende posto l'attuale approdo di Marina
          Piccola.
        </Text>
        <Text style={styles.text}>
          La storia del lungomare è legata a doppio filo alle pratiche di
          estrazione del sale, iniziate già in epoca romana e proseguite fino
          all'età moderna. Le torri dislocate sul litorale risalgono al XVI sec,
          e avevano una funzione anti-barbaresca. Si rivelarono poi utili anche
          nel secolo successivo, viste le continue incursioni da parte di
          spagnoli e francesi.
        </Text>
        <FlatList
          horizontal={true}
          data={images}
          style={{
            paddingLeft: 20,
            paddingTop: 20,
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
        <Text style={styles.text1}>
          Date le norme anti-COVID, è fatto divieto di assembramento.
        </Text>
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
});

export default Poetto;
