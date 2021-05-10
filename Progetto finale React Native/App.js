import { StyleSheet, StatusBar } from "react-native";
//navigation
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import { DataProvider } from "./context/dataContext";
import { AuthProvider } from "./context/authContext";

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <NavigationContainer>
          <StatusBar
            barStyle="dark-content"
            hidden={false}
            backgroundColor="white"
            translucent={true}
          />
          <StackNavigator />
        </NavigationContainer>
      </DataProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
