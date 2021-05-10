import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import img from "../assets/cagliari-sidebar-img.jpeg";
import { AuthContext } from "../context/authContext";

const Signup = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { register } = useContext(AuthContext);
  const { user, setUser } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.imgBg} />
      <View style={styles.overlay}></View>
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => navigation.navigate("Login")}
      >
        <Feather name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.text}>Crea un account</Text>
      <FormInput
        labelValue={email}
        onChangeText={setEmail}
        placeholderText="Email"
        keyboardType="email-address"
        autoCapitalized="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={setPassword}
        placeholderText="Password"
        secureTextEntry={true}
      />
      {error ? (
        <Text style={{ color: "red" }}>Ops! Email o password errata...</Text>
      ) : null}
      <FormButton
        buttonTitle="Registrati"
        onPress={() => {
          register(email, password);
        }}
      />
      {user ? navigation.navigate("Home") : null}
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.navButtonText}>Sei già registrato? Entra qui!</Text>
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
  text: {
    fontSize: 28,
    marginTop: 10,
    marginBottom: 20,
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
    zIndex: 10,
  },
  signupButton: {
    marginVertical: 25,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default Signup;
