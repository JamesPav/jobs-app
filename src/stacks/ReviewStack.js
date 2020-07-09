import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ReviewScreen from "../screens/ReviewScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createStackNavigator();

function ReviewStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Review"
        component={ReviewScreen}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Review Jobs",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
              <Text>Settings</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default ReviewStack;
