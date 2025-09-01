import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import styles from "./styles";

const CARD_HORIZONTAL_MARGIN = 40; 
const CARD_PADDING = 40;          
const SCREEN_WIDTH = Dimensions.get("window").width;
const CARD_WIDTH = SCREEN_WIDTH - CARD_HORIZONTAL_MARGIN;
const CHART_WIDTH = CARD_WIDTH - CARD_PADDING + 40; 

const COLORS = ["#D97706", "#FFC900"];

export default function LineChartCard({ previous = [], current = [], mode = "week", safeNumber }) {
  const filteredData = [...previous, ...current];
  if (!filteredData.length) filteredData.push({ date: "N/A", hours: 0 });

  const totalPoints = filteredData.length;
  let labelIndexes = [];
  if (mode === "week") labelIndexes = [0, Math.floor(totalPoints / 2), totalPoints - 1];
  else if (mode === "month") labelIndexes = [0, Math.floor(totalPoints / 3), Math.floor((2 * totalPoints) / 3), totalPoints - 1];
  else labelIndexes = filteredData.map((_, i) => i);

let labels = filteredData.map((d, i) => {
  if (!labelIndexes.includes(i)) return "";

  const dateObj = new Date(d.date);
  return `${dateObj.getDate()}/${dateObj.getMonth() + 1}`;
});

const dataPoints = filteredData.map((d) => safeNumber(d?.hours));

if (
  (mode === "day" && filteredData.length < 2) ||
  (mode === "week" && filteredData.length < 7) ||
  (mode === "month" && filteredData.length < 30)
) {
  labels.push("");
  dataPoints.push(null);
}

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
        width={CHART_WIDTH *.85} 
        height={180}
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
          { marginLeft:-20,
            alignSelf: "center"
           } 
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