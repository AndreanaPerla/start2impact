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

const Musei = () => {
  const navigation = useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "Siamo qui!",
        message:
          "http://www.cagliariturismo.it/it/luoghi/i-luoghi-dell-arte-e-della-cultura-319/musei-12/cittadella-dei-musei-328",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const [images, setImages] = useState([
    require("../../assets/img_schede/musei-ingresso.jpg"),
    require("../../assets/img_schede/musei-archeologia.jpg"),
    require("../../assets/img_schede/musei-parco.jpg"),
  ]);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        source={data[10].image}
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
            "https://www.google.it/maps/place/Piazza+Arsenale,+Cagliari+CA/@39.2219054,9.114491,17z/data=!3m1!4b1!4m5!3m4!1s0x12e7340e1a256fbd:0x85eabc7c61b0d1f0!8m2!3d39.2219013!4d9.1166797?hl=it&authuser=0"
          )
        }
      >
        <Feather name="map" size={24} color="white" />
      </TouchableOpacity>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
          {data[10].title}
        </Text>
        <Text style={styles.text}>
          La Cittadella dei Musei è il polo museale della città di Cagliari.
          Situato nel cuore del quartiere storico di Castello, il suo ingresso
          si pone in piazza Arsenale. Il complesso consta di una grande varietà
          di edifici.
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
          <Text style={styles.text3}>Museo Archeologico Nazionale</Text>
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
          <Text style={styles.text3}>Pinacoteca Nazionale</Text>
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
            Museo delle Cere Anatomiche Clemente Susini
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
            Museo Civico di Arte Siamese Stefano Cardu
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
            Museo Etnografico collezione Luigi Cocco
          </Text>
        </View>
        <Text style={styles.text}>
          L'area in cui oggi sorge la Cittadella era ben conosciuta sin
          dall'epoca punica e romana. A testimonianza, infatti, sono state
          rinvenuti reperti e cisterne. In epoca spagnola, vista la posizione
          previliegiata, l'area crebbe come complesso sistema di fortificazioni.
          Nel XVIII sec. i piemontesi vi collocarono l'arsenale e, in seguito al
          successivo trasferimento di quest'ultimo fuori dalle mura della città,
          la caserma. Dopo i bombardamenti del 1943, l'ex-Arsenale attraversò un
          lungo periodo di abbandono e degrado finché, tra gli anni Sessanta e
          Settanta un gruppo di architetti decise di riorganizzare l'area come
          luogo di conservazione della memoria storica della città e dell'isola.
        </Text>
        <FlatList
          horizontal={true}
          data={images}
          style={{
            paddingLeft: 20,
            paddingTop: 0,
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

export default Musei;
