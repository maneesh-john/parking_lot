import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import CreateSlot from "../screens/CreateSlots";
import RegisterSlot from "../screens/RegisterSlots";
import ClearSlot from "../screens/ClearSlots";

const { Navigator, Screen } = createNativeStackNavigator();

const Navigation:React.FC = () => {

  return(
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={Home}
          options={{ title: "Dashboard" }}
        />
        <Screen
          name="CreateSlot"
          component={CreateSlot}
          options={{ title: "Create Slots" }}
        />
        <Screen
          name="RegisterSlot"
          component={RegisterSlot}
          options={{ title: "Register Slots" }}
        />
        <Screen
          name="ClearSlot"
          component={ClearSlot}
          options={{ title: "Clear Slots" }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default   Navigation;