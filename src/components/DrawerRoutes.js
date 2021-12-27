// import 'react-native-gesture-handler';
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomePage from "../pages/HomePage";
import ShirtPage from "../pages/ShirtPage";
import PantsPage from "../pages/PantsPage";
import ShoesPage from "../pages/ShoesPage";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  /** Every page that should be in the sidebar menu */
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 5 }
      }}
      initialRouteName="HomeTestScreen"
    >
      <Drawer.Screen
        options={{
          title: "Home Page", //Set Header Title
          headerStyle: {
            backgroundColor: "#3596F3" //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold" //Set Header text style
          }
        }}
        name="Home"
        component={HomePage}
      />
      <Drawer.Screen
        options={{
          title: "Shoes Page", //Set Header Title
          headerStyle: {
            backgroundColor: "#3596F3" //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold" //Set Header text style
          }
        }}
        name="Shoes"
        component={ShoesPage}
      />
      <Drawer.Screen
        options={{
          title: "Pants Page", //Set Header Title
          headerStyle: {
            backgroundColor: "#3596F3" //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold" //Set Header text style
          }
        }}
        name="Pants"
        component={PantsPage}
      />
      <Drawer.Screen
        options={{
          title: "Shirt Page", //Set Header Title
          headerStyle: {
            backgroundColor: "#3596F3" //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold" //Set Header text style
          }
        }}
        name="Shirt"
        component={ShirtPage}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
