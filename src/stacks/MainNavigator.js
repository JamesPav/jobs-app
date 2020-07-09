import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AuthScreen from "../screens/AuthScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import MainScreen from "../stacks/MainFlow";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Auth" component={AuthScreen} />
      <Tab.Screen name="Main" component={MainScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
