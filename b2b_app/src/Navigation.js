import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Scan_Page from "./pages/Scan_Page";
import Input_Page from "./pages/Input_Page";

const Navigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Scan_Page"
      >
        <Stack.Screen name="Scan_Page" component={Scan_Page} />
        <Stack.Screen name="Input_Page" component={Input_Page} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
