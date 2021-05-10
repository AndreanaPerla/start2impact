import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const FormButton = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: "100%",
    height: 45,
    backgroundColor: "#009fd4",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "normal",
    color: "white",
  },
});

export default FormButton;
