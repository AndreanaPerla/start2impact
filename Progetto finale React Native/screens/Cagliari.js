import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import storia from "../assets/cagliari-storia.jpg";

const Cagliari = () => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        source={storia}
        style={{ width: "100%", height: 300 }}
        imageStyle={{ borderBottomLeftRadius: 65 }}
      >
        <TouchableOpacity
          style={styles.homeIcon}
          onPress={() => navigation.goBack()}
        >
          <Entypo name="home" size={25} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
          Storia di Cagliari in tappe
        </Text>
        <View>
          <Text style={styles.text}>
            Nei corso dei secoli, Cagliari è stata abitati da una grande varietà
            di popoli, ognuno dei quali ha lasciato nella città segni
            indelebili: l'Anfiteatro segno della permanenza romana nell'isola,
            le torri e le fortificazioni di pisani e aragonesi, sono solo alcuni
            degli esempi di patrimonio artistico e culturale di cui il capoluogo
            è portatore.
          </Text>
          <Text
            style={{
              paddingTop: 20,
              paddingLeft: 20,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Epoca antica
          </Text>
          <Text style={styles.text}>
            Pur essendo nata in pieno Neolitico, la costruzione di un prima
            città di Cagliari si deve al periodo di dominazione fenicio-punica.
            Essi infatti ben compresero l'importanza della posizione
            privilegiata del piccolo villaggio al fine di ampliare le reti
            commerciali che andavano espandendosi via mare. L'antica Caralis
            divenne quindi in questo periodo un trafficato porto di mare. Al
            termine della Prima Guerra Punica, la città accolse i nuovi
            conquistatori, i Romani. Testimonianze del loro passaggio sono
            visibili in tutta la città: dall'Anfiteatro alla villa di Tigellio,
            fino alle cisterne dislocate all'interno di tutto il perimetro
            cittadino.
          </Text>
          <Text
            style={{
              paddingTop: 20,
              paddingLeft: 20,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Medioevo
          </Text>
          <Text style={styles.text}>
            Sul finire del V secolo, i Romani lasciarono il posto ai Vandali. In
            tale periodo, Caralis attraversò una fase di generale abbandono per
            risollevarsi con l'arrivo nell'isola dei Bizantini. Questi anni sono
            caratterizzati dalla nascita dei Giudicati, aree del territorio ad
            autonomia locale che godevano di un buon livello di independenza.
            Capitale del Giudicato di Cagliari era Santa Igia. Nel XIII sec,
            Santa Igia si piegò alla conquista dei Pisani che provvidero a
            fortificare la città. Il dominio pisano, tuttavia, non durò a lungo.
            Dopo neanche un secolo, infatti, gli Aragonesi conquistarono la
            città. Dopo il matrimonio di Ferdinando II di Aragona e di Isabella
            di Castiglia, Cagliari e l'intera Sardegna entrarono a far parte del
            neonato Stato Spagnolo.
          </Text>
          <Text
            style={{
              paddingTop: 0,
              paddingLeft: 20,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Periodo sabaudo
          </Text>
          <Text style={styles.text}>
            Dopo il Trattato di Utrecht del 1717, il Regno di Sardegna passò
            nelle mani degli Austriaci, ma vi rimase per un periodo di tempo
            molto limitato. L'anno successivo, infatti, dopo un tentativo di
            riconquista spagnola, Cagliari passò nelle mani dei Savoia e del
            Governo Sabaudo. Tale epoca fu caratterizzata, in un primo momento,
            da un'ondata di rinnovamenti sul piano urbanistico tali da rendere
            Cagliari una città vivibile e moderna, e non solo la cittadella
            fortificata che in effetti era stata fino ad allora. Il malcontento
            tuttavia non si fece attendere. Quando i Francesi tentarono di
            conquistare Cagliari, la difesa dei cittadini fu pronta e
            risolutiva. Visto il coraggioso intervento, i cagliaritani speravano
            in un riconoscimento da parte del Governo Sabaudo. Al rifiuto da
            parte dei Savoia di qualunque forma di concessione o libertà, gli
            abitanti marciarono contro i piemontesi e li cacciarono dalla città.
            L'insurrezione è ancora celebrata duarante "Sa die de sa Sardigna".
            I Savoia tuttavia tornarono alla ribalta e rimasero a capo del Regno
            di Sardegna fino all'unificazione d'Italia del 1861.
          </Text>
          <Text
            style={{
              paddingTop: 0,
              paddingLeft: 20,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Epoca contemporanea
          </Text>
          <Text style={styles.text1}>
            Dopo l'unificazione d'Italia, Cagliari crebbe in maniera
            esponenziale fino allo scoppio della Seconda Guerra Mondiale. Nel
            febbraio del 1943, la città fu pesantemente bombardata dagli
            Alleati. Si stima che circa l'80% delle opere e delle abitazioni
            andò incontro a danneggiamenti gravi e a completa distruzione. Al
            termine della guerra, Cagliari iniziò una seconda vita. Nell'arco di
            vent'anni, la città esplose. Raddoppiarono le abitazioni, così come
            la popolazione: si gettarono le basi per la nascita dell'attuale
            area metropolitana di Cagliari.
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
  homeIcon: {
    position: "absolute",
    right: 20,
    top: 50,
    backgroundColor: "#009fd4",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 13,
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

export default Cagliari;
