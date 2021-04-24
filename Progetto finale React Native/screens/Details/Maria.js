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

const Maria = () => {
  const navigation = useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "Siamo qui!",
        message:
          "http://www.cagliariturismo.it/it/luoghi/i-luoghi-della-fede-313/chiese-13/cattedrale-di-santa-maria-e-torre-campanaria-6",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const [images, setImages] = useState([
    require("../../assets/img_schede/maria-interno.jpg"),
    require("../../assets/img_schede/maria-dettaglio.jpg"),
  ]);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        source={data[3].image}
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
            "https://www.google.it/maps/place/Cattedrale+di+Santa+Maria+Assunta+e+Santa+Cecilia/@39.2187914,9.1145785,17z/data=!3m1!4b1!4m5!3m4!1s0x12e7340e8c808243:0xafea20fdcd17fac8!8m2!3d39.2187873!4d9.1167672?hl=it&authuser=0"
          )
        }
      >
        <Feather name="map" size={24} color="white" />
      </TouchableOpacity>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
          Cattedrale di Santa Maria
        </Text>
        <Text style={styles.text}>
          La cattedrale di Santa Maria Assunta e di Santa Cecilia è uno dei più
          importanti luoghi di culto di Cagliari. La sua costruzione, in stile
          romanico pisano, risale agli inizi del XIII sec. L'attuale facciata
          neoromanica, fu invece innalzata negli anni 30 del Novecento.
        </Text>
        <Text style={styles.text1}>
          Situata nel cuore del quartiere di Castello, la cattedrale porta in sé
          un connubio uniforme di stili. Se all'inizio portava unicamente i
          tratti distintivi dell'architettura romanica, questi furono in parte
          rimpiazzati da forme ed elementi barocchi risalenti alla fine del XVII
          sec. A loro volta, questi subirono il peso di interventi di
          rinnovamento degli inizi del Novecento.
        </Text>
        <Text style={styles.text}>
          Sotto l'altare prende posto il santuario dei Martiri, una cripta
          sotterranea contenente quasi 200 reliquie, dislocate in nicchie lungo
          tutto il perimetro. All'interno della cattedrale, invece, trovano
          posto simulacri, mauseli e cappelle di notevole importanza artistica.
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
        <Text style={styles.text}>Orari di apertura: 8-13 e 16-20.</Text>
        <Text style={styles.text2}>
          La torre campanaria è visitabile, previa prenotazione, dal lunedì al
          venerdì dalle 10 alle 13.
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
    marginTop: -30,
    marginBottom: -30,
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
    marginBottom: 20,
  },
});

export default Maria;
