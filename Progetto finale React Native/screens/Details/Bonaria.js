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

const Bonaria = () => {
  const navigation = useNavigation();
  const [data, setData] = useContext(DataContext);

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "Siamo qui!",
        message:
          "http://www.cagliariturismo.it/it/luoghi/i-luoghi-della-fede-313/chiese-13/basilica-e-santuario-di-n-s-di-bonaria-31",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        source={data[2].image}
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
            "https://www.google.it/maps/place/Santuario+di+Nostra+Signora+di+Bonaria/@39.20857,9.1203175,15z/data=!4m13!1m7!3m6!1s0x12e73389880f7775:0x327f6ded3488adab!2sBonaria,+Cagliari+CA!3b1!8m2!3d39.2099267!4d9.1230745!3m4!1s0x12e73414cf670abd:0x93e6a7a45929876c!8m2!3d39.2083919!4d9.1253525?hl=it&authuser=0"
          )
        }
      >
        <Feather name="map" size={24} color="white" />
      </TouchableOpacity>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
          Basilica e Santuario di N.S. di Bonaria
        </Text>
        <Text style={styles.text}>
          Il Santuario di Nostra Signora di Bonaria è l'edificio religioso più
          importante della Sardegna. Situato sulla cima dell'omonimo colle, è un
          vero e proprio complesso religioso suddiviso in più parti.
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            paddingRight: 20,
          }}
        >
          <Text style={{ paddingLeft: 20, opacity: 0.5, marginTop: 5 }}>
            {"\u2022"}
          </Text>
          <Text style={styles.text3}>
            Santuario in stile neo-gotico, originario del XIV sec, in cui è
            custodito il simulacro di Nostra Signora di Bonaria, patrona della
            Sardegna e di Cagliari, nonché protettrice dei naviganti
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            paddingRight: 20,
          }}
        >
          <Text style={{ paddingLeft: 20, opacity: 0.5, marginTop: 5 }}>
            {"\u2022"}
          </Text>
          <Text style={styles.text3}>
            Basilica neoclassica risalente al XVIII sec.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            paddingRight: 20,
          }}
        >
          <Text style={{ paddingLeft: 20, opacity: 0.5, marginTop: 5 }}>
            {"\u2022"}
          </Text>
          <Text style={styles.text3}>Cimitero monumentale omonimo</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            paddingRight: 20,
          }}
        >
          <Text style={{ paddingLeft: 20, opacity: 0.5, marginTop: 5 }}>
            {"\u2022"}
          </Text>
          <Text style={styles.text3}>
            Convento gestito dall'Ordine dei padri mercedari, nel cui chiostro è
            presente il Museo di Bonaria
          </Text>
        </View>
        <Text style={styles.text}>
          Durante l'assedio catalano del XIV sec, Alfonso d'Aragona fece
          costruire sulla sommità del colle, denominato Bon Aire, una cittadella
          fortificata. Dopo la cacciata dei pisani dalla Sardegna, il Re donò
          l'area ai frati dell'Ordine di Santa Maria della Mercede. La
          costruzione della chiesa iniziò solo agli inizi del 1700. Tuttavia a
          causa di continue interruzioni il progetto fu rielaborato e, infine,
          portato a termine nel XVIII sec.
        </Text>
        <Text style={styles.text}>
          A causa dei bombardamenti della seconda guerra mondiale, l'edificio
          subì gravi danni. Fu quindi ristrutturato in più riprese: prima nel
          1947, poi nel 1960 e infine del 1998.
        </Text>
        <FlatList
          horizontal={true}
          data={data[2].gallery}
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
          Orari di apertura: dalle 7 alle 19 (feriali), dalle 6,30 alle 21
          (festivi e prefestivi).
        </Text>
        <Text style={styles.text1}>
          Si raccomanda il rispetto delle norme base anti-COVID.
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
  text3: {
    paddingRight: 20,
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: "normal",
    opacity: 0.5,
    justifyContent: "flex-start",
    textAlign: "justify",
    lineHeight: 26,
  },
});

export default Bonaria;
