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

const Parco = () => {
  const navigation = useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "Siamo qui!",
        message:
          "http://www.cagliariturismo.it/it/luoghi/i-luoghi-della-natura-318/aree-verdi-16/parco-di-molentargius-139",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const [images, setImages] = useState([
    require("../../assets/img_schede/parco-fenicotteri.jpg"),
    require("../../assets/img_schede/parco-stagno.jpg"),
  ]);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        source={data[8].image}
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
            "https://www.google.it/maps/place/Parco+Naturale+Molentargius+Saline/@39.2054078,9.1445185,17z/data=!3m1!4b1!4m5!3m4!1s0x12e733634105786f:0x60a26a76635a9ba1!8m2!3d39.2054037!4d9.1467072?hl=it&authuser=0"
          )
        }
      >
        <Feather name="map" size={24} color="white" />
      </TouchableOpacity>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
          {data[8].title}
        </Text>
        <Text style={styles.text}>
          Lo Stagno di Molentargius è una delle più importanti aree umide
          d'Europa ed è riconosciuto negli elenchi ufficiali delle aree umide da
          sottoporre a tutela.
        </Text>
        <Text style={styles.text}>
          Ubicato nell'area metropolitana di Cagliari, lo Stagno di Molentargius
          è stato il luogo primario per l'estrazione di sale, nell'hinterland
          cagliaritano. L'attività è stata interrotta solo nel 1985. Nonostante
          fosse già stata inclusa dalla Convenzione di Ramsar tra le zone umide
          di importanza internazionale, è proprio dopo tale data che iniziano i
          lavori di defizione dell'omonimo parco naturale.
        </Text>
        <Text style={styles.text}>
          All'interno del Parco sono ben visibili le testimonianze del passato
          dell'area umida: vasche ottocentesche, villaggi operai, vecchi ponti
          in ferro, fortini della seconda guerra mondiale. L'ex sede del
          dopolavoro è stata riconvertita in tempi recenti nel Teatro delle
          Saline.
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
        <Text style={styles.text}>
          Orari apertura: dal 1 Marzo al 15 Ottobre dalle 6,30 alle 21, dal 16
          Ottobre al 28 Febbraio dalle 7 alle 18.
        </Text>
        <Text style={styles.text1}>
          Ingresso libero. All'interno del parco si può passeggiare, correre,
          andare in bicicletta, a cavallo o con altri mezzi propri purché
          sprovvisti di motore. Animali domestici ammessi ma al guinzaglio.
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

export default Parco;
