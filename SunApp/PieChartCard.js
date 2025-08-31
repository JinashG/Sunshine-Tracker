import React from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";
import styles from "./styles";

const PIE_SIZE = 90;
const COLORS = ["#f59e0b", "#facc15"];

const LegendPill = ({ color, label }) => (
  <View style={styles.pieLegendPill}>
    <View style={[styles.pillDot, { backgroundColor: color }]} />
    <Text style={styles.pieLegendText}>{label}</Text>
  </View>
);

export default function PieChartCard({ previous = [], current = [], safeNumber, mode = "week" }) {
  const prevTotal = previous.reduce((acc, d) => acc + safeNumber(d?.hours), 0);
  const currTotal = current.reduce((acc, d) => acc + safeNumber(d?.hours), 0);

  const pieData = [
    {
      name: mode === "week" ? "Last Week" : "Last Month",
      population: prevTotal,
      color: COLORS[1],
      legendFontColor: "#111827",
      legendFontSize: 12,
    },
    {
      name: mode === "week" ? "This Week" : "This Month",
      population: currTotal,
      color: COLORS[0],
      legendFontColor: "#111827",
      legendFontSize: 12,
    },
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Historical trends</Text>
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}>
        <View style={{
          width: PIE_SIZE + 20,
          alignItems: "center",
          justifyContent: "center",
        }}>
          <PieChart
            data={pieData}
            width={PIE_SIZE}
            height={PIE_SIZE}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"20"}
            chartConfig={{
              color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
            }}
            hasLegend={false}
          />
        </View>
        <View style={{
          justifyContent: "center",
          marginLeft: 12,
        }}>
          <LegendPill color={COLORS[0]} label={mode === "week" ? "THIS WEEK" : "THIS MONTH"} />
          <LegendPill color={COLORS[1]} label={mode === "week" ? "LAST WEEK" : "LAST MONTH"} />
        </View>
      </View>
    </View>
  );
}