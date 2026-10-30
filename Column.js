import React from "react";
import { View } from "react-native";

export default function Column({ children }) {
  return <View style={{ flexDirection: "column" }}>{children}</View>;
}
