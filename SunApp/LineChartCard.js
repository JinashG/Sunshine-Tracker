import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import styles from "./styles";

const CARD_HORIZONTAL_MARGIN = 40; // If your card uses marginHorizontal: 20
const CARD_PADDING = 40;           // If your card uses padding: 20
const SCREEN_WIDTH = Dimensions.get("window").width;
const CARD_WIDTH = SCREEN_WIDTH - CARD_HORIZONTAL_MARGIN;
const CHART_WIDTH = CARD_WIDTH - CARD_PADDING + 40; // add 40px extra space

const COLORS = ["#f59e0b", "#facc15"];

export default function LineChartCard({ previous = [], current = [], mode = "week", safeNumber }) {
  const filteredData = [...previous, ...current];
  if (!filteredData.length) filteredData.push({ date: "N/A", hours: 0 });

  const totalPoints = filteredData.length;
  let labelIndexes = [];
  if (mode === "week") labelIndexes = [0, Math.floor(totalPoints / 2), totalPoints - 1];
  else if (mode === "month") labelIndexes = [0, Math.floor(totalPoints / 3), Math.floor((2 * totalPoints) / 3), totalPoints - 1];
  else labelIndexes = filteredData.map((_, i) => i);

const labels = filteredData.map((d, i) => (labelIndexes.includes(i) ? d.date : ""));
labels.push(""); // Add this line

const dataPoints = filteredData.map((d) => safeNumber(d?.hours));
dataPoints.push(null); // Add a null data point to match the extra label

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        {mode === "day" ? "Daily Comparison" : mode === "week" ? "Weekly Trend" : "Monthly Trend"}
      </Text>
       <LineChart
        data={{
          labels,
          datasets: [
            {
              data: dataPoints,
              color: () => COLORS[0],
              strokeWidth: 3,
            },
          ],
        }}
        width={CHART_WIDTH } 
        height={220}
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 1,
          color: () => COLORS[0],
          labelColor: () => "#111827",
          propsForDots: { r: "6", strokeWidth: "2", stroke: "#fff" },
          propsForBackgroundLines: {
            stroke: "#e5e7eb",
          },
        }}
        bezier
        style={[
          styles.lineChart,
          { marginLeft:-20
           } // <-- Add this line to shift chart to the left
        ]}
        withInnerLines={true}
        withOuterLines={false}
        withShadow={false}
      />
      <Text style={styles.legend}>
        <Text style={{ color: COLORS[0], fontSize: 18 }}>⬤</Text> Sunshine(hr)
      </Text>
    </View>
  );
}