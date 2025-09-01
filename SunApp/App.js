
import React, { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import ToggleMode from "./ToggleMode";
import LineChartCard from "./LineChartCard";
import PieChartCard from "./PieChartCard";
import InsightsCard from "./InsightsCard";
import styles from "./styles";

export default function App() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("week"); 

  const [time, setTime] = useState("");

  
  const safeNumber = (val) => {
    const num = Number(val);
    return isNaN(num) || !isFinite(num) ? 0 : num;
  };

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted =
        now.toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
        }) +
        ", " +
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
      setTime(formatted);
    };

    update();
    const interval = setInterval(update, 60000); 

    
    fetch("http://10.0.2.2:8000/sunshine")
      .then((res) => res.json())
      .then((json) => {
        const sunshineData = Array.isArray(json.sunshine) ? json.sunshine : [];
        setData(sunshineData);
      })
      .catch((err) => console.error(err));
    return () => clearInterval(interval);
  }, []);


  const getComparisonData = () => {
    if (!data.length) return { previous: [], current: [] };

    let previousSlice = [];
    let currentSlice = [];

    switch (mode) {
      case "day":
        previousSlice = data.slice(-2, -1);
        currentSlice = data.slice(-1);
        break;
      case "week":
        previousSlice = data.slice(-14, -7);
        currentSlice = data.slice(-7);
        break;
      case "month":
        previousSlice = data.slice(-60, -30);
        currentSlice = data.slice(-30);
        break;
      default:
        previousSlice = [];
        currentSlice = [];
    }

    return {
      previous: previousSlice.length ? previousSlice : [],
      current: currentSlice.length ? currentSlice : [],
    };
  };

  const { previous, current } = getComparisonData();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.headerTitle}>SUNSHINE DURATION</Text>
        <Text style={styles.headerSub}>SOURCE: FAST API (MOCK)</Text>
       <Text style={styles.headerSub}>UPDATED: {time ? time : "..."}</Text>

        
        <ToggleMode mode={mode} setMode={setMode} />

      
        <LineChartCard previous={previous} current={current} mode={mode} safeNumber={safeNumber} />

        
        <InsightsCard previous={previous} current={current} safeNumber={safeNumber} />

      
        <PieChartCard previous={previous} current={current} safeNumber={safeNumber} mode={mode} />

       
        <Text style={styles.footer}>
          Timezone: IST · Units: hours/day{"\n"}
          Data randomized for demo
        </Text>
      </View>
    </ScrollView>
  );
}