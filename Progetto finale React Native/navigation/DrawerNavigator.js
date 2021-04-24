import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Cagliari from "../screens/Cagliari";
import CustomSidebar from "../components/CustomSidebar";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#009fd4",
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => <CustomSidebar {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
