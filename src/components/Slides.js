import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Slides = ({ data }) => {
  return (
    <ScrollView horizontal style={styles.container}>
      {data.map((slide) => {
        return (
          <View style={styles.slideStyle} key={slide.text}>
            <Text style={styles.slideText}>{slide.text}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slideText: {
    fontSize: 30,
  },
});

export default Slides;
