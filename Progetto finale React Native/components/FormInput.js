import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const FormInput = ({ labelValue, placeholderText, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={labelValue}
        placeholder={placeholderText}
        numberOfLines={1}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: "100%",
    height: 45,
    borderColor: "#666",
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: "70%",
    height: 32,
    fontSize: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
});

export default FormInput;
