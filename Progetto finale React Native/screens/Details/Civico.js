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

const Civico = () => {
  const navigation = useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "Siamo qui!",
        message:
          "http://www.cagliariturismo.it/it/luoghi/i-luoghi-della-storia-316/monumenti-80/palazzo-civico-234",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const [images, setImages] = useState([
    require("../../assets/img_schede/civico-interno.jpg"),
    require("../../assets/img_schede/civico-dettaglio.jpg"),
  ]);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        source={data[6].image}
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
            "https://www.google.it/maps/place/Palazzo+Civico+di+Cagliari/@39.2150668,9.1085343,17z/data=!3m1!4b1!4m5!3m4!1s0x12e734064dbd3757:0xd303c4b8aaf592be!8m2!3d39.2150627!4d9.110723?hl=it&authuser=0"
          )
        }
      >
        <Feather name="map" size={24} color="white" />
      </TouchableOpacity>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
          {data[6].title}
        </Text>
        <Text style={styles.text}>
          Noto anche come Palazzo Bacaredda, Palazzo Civico sorge in via Roma,
          nel cuore di Cagliari, ed è sede comunale del capoluogo sardo.
        </Text>
        <Text style={styles.text}>
          Sino alla fine del XIX sec, la sede comunale era sita in quello che ad
          oggi è noto come Ex Palazzo di Città. A decidere il trasferimento
          nella nuova sede comunale, ancora da costruirsi, fu l'allora sindaco
          Ottone Bacaredda. I lavori di costruzione iniziarono nel 1899 alla
          presenza di Re Umberto I e della Regina Margherita di Savoia. Lo stile
          artistico ricalca il gotico-catalano, ma riprende in alcuni tratti
          decori tipici dello stile Liberty. I lavori terminarono nel 1907.
        </Text>
        <Text style={styles.text}>
          Palazzo Civico non fu esente dalla distruzione dovuta ai bombardamenti
          della seconda guerra mondiale. Le opere di ricostruzione si protrarono
          fino agli inizi degli anni Cinquanta.
        </Text>
        <FlatList
          horizontal={true}
          data={images}
          style={{
            paddingLeft: 20,
            paddingTop: 20,
            marginBottom: 20,
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

export default Civico;
