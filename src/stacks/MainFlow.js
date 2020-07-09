import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MapScreen from "../screens/MapScreen";
import DeckScreen from "../screens/DeckScreen";
import ReviewStack from "./ReviewStack";

const Tab = createBottomTabNavigator();

const MainFlow = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Deck" component={DeckScreen} />
      <Tab.Screen name="ReviewStack" component={ReviewStack} />
    </Tab.Navigator>
  );
};

export default MainFlow;
