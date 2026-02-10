import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB" },
  scrollContent: { padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", color: "#111827" },
  subtitle: { fontSize: 16, color: "#6B7280", marginBottom: 20 },

  chartContainer: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 24,
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 15,
  },
  chartStyle: { marginVertical: 8, borderRadius: 16 },

  breakdownCard: { backgroundColor: "#FFFFFF", padding: 20, borderRadius: 24 },
  breakdownTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 20,
  },

  row: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  rowLabel: { width: 100, fontSize: 14, color: "#4B5563" },
  progressBarBg: {
    flex: 1,
    height: 8,
    backgroundColor: "#F3F4F6",
    borderRadius: 4,
    marginHorizontal: 10,
  },
  progressFill: { height: "100%", borderRadius: 4 },
  rowValue: { width: 35, fontSize: 14, fontWeight: "600", color: "#111827" },
});
