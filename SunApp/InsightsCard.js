import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function InsightsCard({ previous = [], current = [], safeNumber }) {
  const allData = [...previous, ...current];

  if (!allData.length) return null;

  const totalHours = allData.reduce((sum, d) => sum + safeNumber(d.hours), 0);
  const avgHours = (totalHours / allData.length).toFixed(1);
  const maxHours = Math.max(...allData.map((d) => safeNumber(d.hours)));
  const minHours = Math.min(...allData.map((d) => safeNumber(d.hours)));

  return (
    <View style={[styles.card, styles.insightsCard]}>
      <Text style={styles.cardTitle}>Insights</Text>
      <View style={styles.insightsRow}>
        <View style={styles.pill}>
          <Text style={styles.pillText}>AVG: {avgHours}h</Text>
        </View>
        <View style={styles.pill}>
          <Text style={styles.pillText}>MAX: {maxHours}h</Text>
        </View>
        <View style={styles.pill}>
          <Text style={styles.pillText}>MIN: {minHours}h</Text>
        </View>
      </View>
    </View>
  );
}
