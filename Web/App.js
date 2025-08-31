import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, Platform } from "react-native";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import styles from "./styles";

const COLORS = ["#f59e0b", "#facc15"];
const isMobile = Dimensions.get("window").width < 600 || Platform.OS !== "web";

export default function App() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("week"); // "day" | "week" | "month"

  // Fetch backend data
  useEffect(() => {
     fetch("http://127.0.0.1:8000/sunshine")
      .then((res) => res.json())
      .then((json) => setData(json.sunshine || []))
      .catch((err) => console.error(err));
  }, []);

  // ---- Split into previous vs current periods ----
  const getComparisonData = () => {
    if (!data.length) return { current: [], previous: [] };

    if (mode === "day") {
      return {
        previous: data.slice(-2, -1),
        current: data.slice(-1),
      };
    }
    if (mode === "week") {
      return {
        previous: data.slice(-14, -7),
        current: data.slice(-7),
      };
    }
    if (mode === "month") {
      return {
        previous: data.slice(-60, -30),
        current: data.slice(-30),
      };
    }
    return { current: [], previous: [] };
  };

  const { current, previous } = getComparisonData();
  const filteredData = [...previous, ...current];

  // ---- Insights ----
  const allHours = filteredData.map((d) => d.hours);
  const avg =
    allHours.reduce((sum, h) => sum + h, 0) / (allHours.length || 1);
  const max = Math.max(...allHours, 0);
  const min = Math.min(...allHours, 10);

  // ---- Pie chart data ----
  const pieData =
    mode === "day"
      ? [
          { name: "Yesterday", value: +(previous[0]?.hours || 0).toFixed(1) },
          { name: "Today", value: +(current[0]?.hours || 0).toFixed(1) },
        ]
      : [
          {
            name: "Previous " + mode,
            value: +(
              previous.reduce((s, d) => s + d.hours, 0) /
              (previous.length || 1)
            ).toFixed(1),
          },
          {
            name: "This " + mode,
            value: +(
              current.reduce((s, d) => s + d.hours, 0) /
              (current.length || 1)
            ).toFixed(1),
          },
        ];

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {/* Header */}
        <Text style={styles.headerTitle}>SUNSHINE DURATION</Text>
        <Text style={styles.headerSub}>SOURCE: FAST API (MOCK)</Text>
        <Text style={styles.headerSub}>UPDATED: AUG 28, 22:00</Text>

        {/* Toggle */}
        <View style={styles.toggleRow}>
          {["day", "week", "month"].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.toggle,
                mode === item && styles.toggleActive,
              ]}
              onPress={() => setMode(item)}
            >
              <Text
                style={[
                  styles.toggleText,
                  mode === item && styles.toggleTextActive,
                ]}
              >
                {item.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Charts + Insights */}
        <View style={isMobile ? styles.column : styles.row}>
          {/* Line Chart */}
          <View style={[styles.card, styles.flex1]}>
            <Text style={styles.cardTitle}>
              {mode === "day"
                ? "Daily Comparison"
                : mode === "week"
                ? "Weekly Trend"
                : "Monthly Trend"}
            </Text>
            <View style={{ width: "100%", height: isMobile ? 200 : 250 }}>
              <ResponsiveContainer>
                <LineChart data={filteredData}>
                  <CartesianGrid stroke="#e5e7eb" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="hours"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    dot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </View>
            <Text style={styles.legend}>⬤ Sunshine (hr)</Text>
          </View>

          {/* Insights */}
          <View style={[styles.card, styles.insightsCard]}>
            <Text style={styles.cardTitle}>Insights</Text>
            <View style={styles.insightsRow}>
              <View style={styles.pill}>
                <Text style={styles.pillDot}>⬤</Text>
                <Text style={styles.pillText}>AVG {avg.toFixed(1)}H</Text>
              </View>
              <View style={styles.pill}>
                <Text style={styles.pillDot}>⬤</Text>
                <Text style={styles.pillText}>MAX {max.toFixed(1)}H</Text>
              </View>
              <View style={styles.pill}>
                <Text style={styles.pillDot}>⬤</Text>
                <Text style={styles.pillText}>MIN {min.toFixed(1)}H</Text>
              </View>
            </View>
          </View>

          {/* Historical Trends */}
          <View style={[styles.card, styles.flex1]}>
            <Text style={styles.cardTitle}>Historical trends</Text>
            <View style={{ width: "100%", height: isMobile ? 200 : 250 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={isMobile ? 50 : 60}
                    label
                  >
                    {pieData.map((entry, i) => (
                      <Cell
                        key={`cell-${i}`}
                        fill={COLORS[i % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </View>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Timezone: IST · Units: hours/day {"\n"}Data randomized for demo
        </Text>
      </View>
    </View>
  );
}
