
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function ToggleMode({ mode, setMode }) {
  const options = ["day", "week", "month"];
  return (
    <View style={styles.toggleRow}>
      {options.map((opt) => (
        <TouchableOpacity
          key={opt}
          style={[
            styles.toggle,
            mode === opt && styles.toggleActive,
            mode === opt && styles.toggleActiveShadow,
          ]}
          onPress={() => setMode(opt)}
        >
          <Text style={[styles.toggleText, mode === opt && styles.toggleTextActive]}>
            {opt.toUpperCase()}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}