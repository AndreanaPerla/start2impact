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

const Palazzo = () => {
  const navigation = useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "Siamo qui!",
        message:
          "http://www.cagliariturismo.it/it/luoghi/i-luoghi-dell-arte-e-della-cultura-319/musei-12/palazzo-di-citta-225",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const [images, setImages] = useState([
    require("../../assets/img_schede/palazzo-dettaglio.jpg"),
    require("../../assets/img_schede/palazzo-interno.jpg"),
  ]);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        source={data[11].image}
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
            "https://www.google.it/maps/place/Antico+Palazzo+di+Citt%C3%A0/@39.218658,9.1143688,17z/data=!3m1!4b1!4m5!3m4!1s0x12e7340e940aa1df:0x52cbc898abc1c15d!8m2!3d39.2186539!4d9.1165575?hl=it&authuser=0"
          )
        }
      >
        <Feather name="map" size={24} color="white" />
      </TouchableOpacity>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
          {data[11].title}
        </Text>
        <Text style={styles.text}>
          L'ex Palazzo di Città è stato sede municipale della città dal medioevo
          fino ai primi anni del XX secolo. Il palazzo ospita la mostra, in
          esposizione permanente, del Fondo Etnografico Manconi Passino, del
          Fondo Ceramico della Collezione Ingrao e del Fondo d'Arte Sacra della
          Collezione Ingrao.
        </Text>
        <Text style={styles.text}>
          Le origini del Palazzo risalgono al XIV sec, quando le autorità
          aragonesi concessero l'area ai consiglieri perché erigessero un luogo
          in cui tenere le proprie assemblee. L'aspetto attuale, tuttavia, si
          deve alla ristrutturazione del Settecento che trasformò l'edificio con
          le tipiche declinazione del barocchetto piemontese. Dopo il
          trasferimento della sede comunale nell'attuale Palazzo Civico, divenne
          sede del Conservatorio. Quando quest'ultimo fu trasferito, giacque
          dimenticato per anni. Dopo una lunga serie d restauri, nel 2009 è
          stato riaperto, divenendo sede di mostre temporanee e permanenti.
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
          I Musei Civici sono temporaneamente chiusi, nel rispetto delle
          disposizioni di legge, a tutela della salute pubblica per la
          prevenzione della diffusione del COVID-19
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

export default Palazzo;
