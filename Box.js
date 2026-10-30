import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Box({ children }) {
  return (
    <View style={styles.box}>
      <Text style={styles.label}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    backgroundColor: "#dbeafe",
    borderColor: "#2563eb",
    borderWidth: 1,
    justifyContent: "center",
    margin: 4,
    minHeight: 64,
    minWidth: 64,
  },
  label: {
    color: "#1e3a8a",
    fontSize: 18,
    fontWeight: "600",
  },
});
