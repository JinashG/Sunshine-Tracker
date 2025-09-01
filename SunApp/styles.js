
import { StyleSheet, Dimensions, Platform } from "react-native";

const isMobile = Dimensions.get("window").width < 600 || Platform.OS !== "web";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE100",
    padding: 16,
  },
  wrapper: {
    maxWidth: 1200,
    marginTop: 24,
    width: "100%",
    alignSelf: "center",
  },

  headerTitle: {
    fontSize: isMobile ? 28 : 32,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
    letterSpacing: -1,
    paddingTop: 4
  },
  headerSub: {
    fontSize: isMobile ? 13 : 15,
    color: "#6b7280",
    marginBottom: 2,
    fontWeight: "600",
    letterSpacing: 0.5,
  },

  toggleRow: {
    flexDirection: "row",
    borderRadius: 30,
    overflow: "visible",
    backgroundColor: "#fff",
    marginVertical: 18,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.13,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
  },
  toggle: {
    flex: 1,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  toggleActive: {
    backgroundColor: "#FFC900",
    borderRadius: 30,
  },
  toggleActiveShadow: {
    shadowColor: "#D97706",
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 8,
  },
  toggleText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    letterSpacing: 1,
  },
  toggleTextActive: {
    color: "#111827",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 20,
    marginBottom: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.13,
    shadowRadius: 16,
    elevation: 8,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 14,
    color: "#111827",
    letterSpacing: -0.5,
  },

  lineChart: {
    borderRadius: 10,
    marginVertical: 0,
    backgroundColor: "#fff",
  },
  legend: {
    marginTop: 6,
    fontSize: 15,
    color: "#374151",
    fontWeight: "600",
    letterSpacing: 0.5,
  },

  insightsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  pill: {
    flexDirection: "row",
    alignItems: "left",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#FFC900",
    shadowOpacity: 0.13,
    shadowOffset: { width: 0, height: 2 },
    marginHorizontal: 2,
    marginVertical: 2,
  },
  pillDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FFC900",
    marginRight: 8,
  },
  pillText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    letterSpacing: 0.5,
  },

  pieLegendPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 6,     
    paddingHorizontal: 10,     
    marginBottom: 8,            
    elevation: 2,
    shadowColor: "#FFC900",
    shadowOpacity: 0.10,
    shadowOffset: { width: 0, height: 1 },
  },
  pieLegendText: {
    fontSize: 13,              
    fontWeight: "700",
    color: "#111827",
    marginLeft: 6,             
    letterSpacing: 0.5,
  },

  footer: {
    fontSize: isMobile ? 13 : 14,
    color: "#6b7280",
    textAlign: "left",
    marginVertical: 16,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
});