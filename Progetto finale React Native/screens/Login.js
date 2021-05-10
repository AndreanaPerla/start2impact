import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import img from "../assets/cagliari-sidebar-img.jpeg";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { login } = useContext(AuthContext);
  const { user, setUser } = useContext(AuthContext);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.imgBg} />
      <View style={styles.overlay}></View>
      <Text style={styles.text}>Benvenutə in Visit Cagliari!</Text>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontStyle: "italic",
          marginBottom: 20,
        }}
      >
        Scopri le meraviglie della città
      </Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        keyboardType="email-address"
        autoCapitalized="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Entra"
        onPress={() => {
          login(email, password);
          clearInputs();
        }}
      />
      {user ? navigation.navigate("Home") : null}
      <TouchableOpacity
        style={styles.signinButton}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.navButtonText}>
          Non hai un account? Registrati qui!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  imgBg: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "#000",
    opacity: 0.5,
  },
  text: {
    fontSize: 28,
    marginTop: 10,
    marginBottom: 5,
    color: "white",
    fontWeight: "bold",
    zIndex: 10,
  },
  navButton: {
    marginTop: 15,
  },
  signinButton: {
    marginVertical: 25,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default Login;
