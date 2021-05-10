import React, { useContext, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Bastione from "../screens/Details/Bastione";
import SanMichele from "../screens/Details/SanMichele";
import Bonaria from "../screens/Details/Bonaria";
import Maria from "../screens/Details/Maria";
import Poetto from "../screens/Details/Poetto";
import SanSaturnino from "../screens/Details/SanSaturnino";
import Civico from "../screens/Details/Civico";
import Anfiteatro from "../screens/Details/Anfiteatro";
import Parco from "../screens/Details/Parco";
import CostaRei from "../screens/Details/CostaRei";
import Musei from "../screens/Details/Musei";
import Palazzo from "../screens/Details/Palazzo";
import Mercato from "../screens/Details/Mercato";
import Necropoli from "../screens/Details/Necropoli";
import Cagliari from "../screens/Cagliari";
import Move from "../screens/Move";
import DrawerNavigator from "./DrawerNavigator";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Stack = createStackNavigator();

function DrawerRoutes() {
  return <DrawerNavigator />;
}

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRoute="Login"
      screenOptions={{ headerStyle: false }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={DrawerRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bastione"
        component={Bastione}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SanMichele"
        component={SanMichele}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bonaria"
        component={Bonaria}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Maria"
        component={Maria}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Poetto"
        component={Poetto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SanSaturnino"
        component={SanSaturnino}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Civico"
        component={Civico}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Anfiteatro"
        component={Anfiteatro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Parco"
        component={Parco}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CostaRei"
        component={CostaRei}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Musei"
        component={Musei}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Palazzo"
        component={Palazzo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Mercato"
        component={Mercato}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Necropoli"
        component={Necropoli}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cagliari"
        component={Cagliari}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Move"
        component={Move}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
