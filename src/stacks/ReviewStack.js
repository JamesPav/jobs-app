import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-elements";
import { TransitionPresets } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";

import ReviewScreen from "../screens/ReviewScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createStackNavigator();

function ReviewStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "white" },
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen
        name="Review"
        component={ReviewScreen}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Review Jobs",
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("Settings")}
              title="Settings"
              type="clear"
            />
          ),
        }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default ReviewStack;
