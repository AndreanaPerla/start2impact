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

const Anfiteatro = () => {
  const navigation = useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "Siamo qui!",
        message:
          "http://www.cagliariturismo.it/it/luoghi/i-luoghi-della-storia-316/monumenti-80/anfiteatro-romano-170",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const [images, setImages] = useState([
    require("../../assets/img_schede/anfiteatro-gallerie.jpg"),
    require("../../assets/img_schede/anfiteatro-vista.jpg"),
  ]);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        source={data[7].image}
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
            "https://www.google.it/maps/place/Anfiteatro+Romano+di+Cagliari/@39.2240815,9.1111135,17z/data=!3m1!4b1!4m5!3m4!1s0x12e7341012c84163:0x6161931dc38367c4!8m2!3d39.2240774!4d9.1133022?hl=it&authuser=0"
          )
        }
      >
        <Feather name="map" size={24} color="white" />
      </TouchableOpacity>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
          {data[7].title}
        </Text>
        <Text style={styles.text}>
          L'Anfiteatro Romano è la più imponente testimonianza del passato
          romano di Cagliari. Risalente al II sec.d.C., poteva contenere fino a
          10.000 spettatori. La facciata sud, oggi scomparsa, doveva superare i
          20 metri di altezza.
        </Text>
        <Text style={styles.text}>
          In parte scavato nella roccia viva e in parte composto da imponenti
          blocchi di calcare bianco, ospitava combattimenti tra animali, tra
          gladiatori e tra combattenti specializzati. Era inoltre sede
          privilegiata per l'esecuzione di pene capitali e spettacoli teatrali.
        </Text>
        <Text style={styles.text}>
          Quando nel V sec.d.C. l'imperatore Valentiniano III proibì le lotte
          tra gladiatori, l'anfiteatro cadde in disuso. Nei secoli successivi,
          l'area fu utilizzata come cava di estrazione dai diversi conquistatori
          di istanza a Cagliari, che utilizzavano il materiale per costruire
          torri e fortificazioni in difesa della città. Fu solo nel XIX sec. che
          l'anfiteatro fu acquisito dal Comune di Cagliari, il quale affidò gli
          scavi archeologici al canonico Giovanni Spano.
        </Text>
        <Text style={styles.text}>
          Dopo i contestati lavori di ristrutturazione degli anni 2000, la
          struttura è stata riportata alla sua forma orginaria e convertita a
          sito archeologico.
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
          Orari apertura: dal lunedì al venerdì, dalle 10 alle 18, previa
          prenotazione.
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

export default Anfiteatro;
