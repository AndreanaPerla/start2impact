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

const Bastione = () => {
  const navigation = useNavigation();
  const [data, setData] = useContext(DataContext);

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "Siamo qui!",
        message:
          "http://www.cagliariturismo.it/it/luoghi/i-luoghi-della-storia-316/monumenti-80/bastione-di-saint-remy-276",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        source={data[0].image}
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
            "https://www.google.it/maps/place/Bastione+di+Saint+Remy/@39.2158496,9.1154491,289m/data=!3m1!1e3!4m5!3m4!1s0x12e734093f9a4089:0x28ece4892a555ca4!8m2!3d39.2159099!4d9.1163986?hl=it&authuser=0"
          )
        }
      >
        <Feather name="map" size={24} color="white" />
      </TouchableOpacity>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
          Bastione di Saint Remy
        </Text>
        <View>
          <Text style={styles.text}>
            Porta d'accesso allo storico quartiere di Castello e situato tra le
            vie dello shopping più conosciute (via Garibaldi e via Manno), il
            Bastione è uno dei simboli di Cagliari. Deve il suo nome al barone
            di Saint Remy, primo viceré piemontese.
          </Text>
          <Text style={styles.text}>
            La sua costruzione risale alla fine del XIX secolo: il proposito era
            quello di unificare i cinquecenteschi bastioni spagnoli della Zecca,
            di Santa Caterina e dello Sperone. La struttura, composta da enormi
            blocchi di calcare bianco, si snoda su diverse rampe. Tramite queste
            si accede, tra gli altri, alla passeggiata coperta che si sviluppa
            su lunghi corridoi luminosi dominati da ampie arcate, e alla
            terrazza Umberto I, da cui si può godere della vista dell'intera
            città.
          </Text>
          <Text style={styles.text}>
            Il Bastione attuale è l'opera dei fedeli lavori di ricostruzione del
            1946, avvenuti a causa dei bombardamenti della seconda guerra
            mondiale che distrussero parte della città.
          </Text>
          <FlatList
            horizontal={true}
            data={data[0].gallery}
            style={{
              paddingLeft: 20,
              paddingTop: 20,
            }}
            renderItem={({ item }) => (
              <Image source={item} style={styles.imgs} />
            )}
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
            La passeggiata coperta e i percorsi archeologici della Galleria
            dello Sperone sono visitabili dal lunedì al venerdì dalle 10 alle
            20, previa prenotazione.
          </Text>
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

export default Bastione;
