import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE100",
    padding: 20,
  },
  wrapper: {
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
  },

 
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
    color: "#111827",
  },
  headerSub: {
    fontSize: 13,
    color: "#6b7280",
  },

  
 toggleRow: {
  flexDirection: "row",
  marginVertical: 16,
  borderRadius: 12, 
  overflow: "hidden", 
},

toggle: {
  flex: 1,
  paddingVertical: 10,
  alignItems: "center",
  backgroundColor: "#fff", 
},

toggleActive: {
  backgroundColor: "#FFC900",
},

toggleText: {
  fontSize: 14,
  fontWeight: "600",
  color: "#1f2937", 
},

toggleTextActive: {
  color: "#fff", 
},

  row: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
    alignItems: "flex-start",
  },
  column: {
    flexDirection: "column",
    gap: 16,
    marginBottom: 20,
  },


  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  insightsCard: {
    maxHeight: 150,
    justifyContent: "flex-start",
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 8,
    color: "#111827",
  },


  insightsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9fafb",
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  pillDot: {
    color: "#FFC900",
    marginRight: 4,
  },
  pillText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#111827",
  },


  legend: {
    marginTop: 6,
    fontSize: 12,
    color: "#D97706",
  },


  footer: {
    marginTop: 20,
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
  },
});
