import React from "react";
import { View, Text, StyleSheet } from "react-native";

type CarsProps = {
    name: string;
    brand: string;
    hp: number;
};
export default function Cars(props: CarsProps) {
  return (
    <View style={styles.container}>
          <Text>{props.name}</Text>
          <Text>{props.brand}</Text>
          <Text>{props.hp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

//do props
