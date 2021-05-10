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

const SanSaturnino = () => {
  const navigation = useNavigation();
  const [data, setData] = useContext(DataContext);

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "Siamo qui!",
        message:
          "http://www.cagliariturismo.it/it/luoghi/i-luoghi-della-fede-313/chiese-13/basilica-di-san-saturnino-4",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        source={data[5].image}
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
            "https://www.google.it/maps/place/Basilica+paleocristiana+di+San+Saturnino/@39.2139615,9.1209671,17z/data=!3m1!4b1!4m5!3m4!1s0x12e73412e58d4ffd:0x1249ca52d02c0608!8m2!3d39.2139574!4d9.1231558?hl=it&authuser=0"
          )
        }
      >
        <Feather name="map" size={24} color="white" />
      </TouchableOpacity>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
          {data[5].title}
        </Text>
        <Text style={styles.text}>
          La basilica di San Saturnino è la chiesa più antica di Cagliari,
          dedicata al patrono della città. Si trova nel quartiere Villanova ed è
          uno dei più importanti e antichi complessi paleocristiani della
          Sardegna.
        </Text>
        <Text style={styles.text}>
          Eretta nel luogo dove la tradizione individua il sepolcro del martire
          Saturnino, la basilica fu donata alla fine del XI sec. ai monaci
          Vittorini di Marsiglia, che provvidero a restaurarla secondo il gusto
          romanico provenzale. In seguito all'assedio catalano del 1300, subì
          notevoli danni per poi cadere in rovina. I lavori di ristrutturazione
          iniziarono oltre un secolo dopo per opera dell'arcidiocesi di
          Cagliari. Non tardò molto, però, che la basilica sprofondasse
          nuovamente nel dimenticatoio, tanto che nella metà del XVII sec, subì
          l'asportazione di materiali utili per la costruzione della Cattedrale
          di Santa Maria.
        </Text>
        <Text style={styles.text}>
          In seguito ai danni riportati dai bombardamenti del 1943, fu riparata
          nel dopoguerra e restituita al culto, divenendo meta prediletta per la
          celebrazione di matrimoni. Gli ultimi lavori di restauro risalgono
          agli anni 90.
        </Text>
        <FlatList
          horizontal={true}
          data={data[5].gallery}
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
          Orari apertura: dal mercoledì al venerdì, dalle 9 alle 13,30.
        </Text>
        <Text style={styles.text1}>Ingresso gratuito</Text>
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

export default SanSaturnino;
