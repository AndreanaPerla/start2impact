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

const CostaRei = () => {
  const navigation = useNavigation();
  const [data, setData] = useContext(DataContext);

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "Siamo qui!",
        message: "https://www.sardegnaturismo.it/it/luoghi/sud/costa-rei",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        source={data[9].image}
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
            "https://www.google.it/maps/place/Spiaggia+di+Costa+Rei/@39.2533522,9.5683397,14z/data=!4m13!1m7!3m6!1s0x12e0eacca787da27:0x9735c4749a5e8769!2s09043+Costa+Rei+SU!3b1!8m2!3d39.2500991!4d9.5701296!3m4!1s0x12e0eaceebcaae01:0x6317fc53e440459f!8m2!3d39.250783!4d9.5744777?hl=it&authuser=0"
          )
        }
      >
        <Feather name="map" size={24} color="white" />
      </TouchableOpacity>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
          {data[9].title}
        </Text>
        <Text style={styles.text}>
          CostaRei è una frazione marittima di Muravera, città poco distante dal
          capoluogo sardo. Il lungomare, che si estende per circa 10km, è
          rinomato per la sabbia fine e il mare cristallino.
        </Text>
        <Text style={styles.text}>
          Sulle origini del nome esistono due teorie: una secondo qui la
          denominazione sarebbe una declinazione di Costa del Re (teoria
          avvalorata dalla presenza, poco distante, di Cala Reina, Cala della
          Regina), e una secondo cui il nome deriva da una colonia penale poco
          distante in cui i detenuti (rei) lavoravano alla bonifica delle zone
          paludose limitrofe.
        </Text>
        <Text style={styles.text}>
          CostaRei come meta turistica di primaria importanza per la Sardegna,
          nasce solo negli anni Sessanta per intraprendenza dell'imprenditore
          belga Guido van Alphen che comprò circa 400 ettari di terreni per
          costruirvi le prime villette. Da allora, CostaRei è stata meta di una
          massiccia opera di edificazione che ha portato il paese a popolarsi di
          oltre 40.000 abitanti, cui tuttavia non si contano i molteplici arrivi
          del periodo estivo.
        </Text>
        <Text style={styles.text}>
          Nel 2009 la prestigiosa Lonely Planet ha inserito CostaRei tra le 10
          spiagge più belle del mondo.
        </Text>
        <FlatList
          horizontal={true}
          data={data[9].gallery}
          style={{
            padding: 20,
          }}
          renderItem={({ item }) => <Image source={item} style={styles.imgs} />}
        />
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
});

export default CostaRei;
