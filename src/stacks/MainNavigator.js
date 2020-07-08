import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AuthScreen from "../screens/AuthScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Auth" component={AuthScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
