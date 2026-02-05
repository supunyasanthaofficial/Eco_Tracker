import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB" },
  scrollContent: { padding: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  greeting: { fontSize: 22, fontWeight: "bold", color: "#111827" },
  subGreeting: { fontSize: 14, color: "#6B7280", marginTop: 4 },
  avatarPlaceholder: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#E5E7EB",
  },

  mainCard: {
    backgroundColor: "#22C55E",
    borderRadius: 24,
    padding: 24,
    flexDirection: "row",
    overflow: "hidden",
    marginBottom: 20,
  },
  cardLabel: { color: "#DCFCE7", fontSize: 16, fontWeight: "500" },
  cardValue: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 8,
  },
  cardUnit: { fontSize: 16, fontWeight: "normal" },
  trendBadge: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  trendText: { color: "#FFFFFF", fontSize: 12, fontWeight: "600" },
  cardIcon: { position: "absolute", right: -10, bottom: -10 },

  statsRow: { flexDirection: "row", gap: 15, marginBottom: 25 },
  statBox: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#F3F4F6",
  },
  statLabel: { fontSize: 12, color: "#6B7280", marginTop: 8 },
  statNum: { fontSize: 16, fontWeight: "bold", color: "#111827", marginTop: 2 },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#111827" },
  seeAll: { color: "#16A34A", fontWeight: "600" },

  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 16,
    marginBottom: 10,
  },
  activityIcon: { padding: 10, borderRadius: 12 },
  activityDetails: { flex: 1, marginLeft: 12 },
  activityName: { fontSize: 15, fontWeight: "600", color: "#111827" },
  activityTime: { fontSize: 12, color: "#9CA3AF" },
  activityImpact: { fontSize: 14, fontWeight: "bold", color: "#16A34A" },
});
