import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PrivacyPolicyScreen = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.content}>
        Last Updated: February 2026 {"\n\n"}
        Your privacy is important to us. Eco Tracker collects data to help you
        track your environmental impact.{"\n\n"}
        1. Data Collection: We store your daily eco-activities and location for
        AQI data.{"\n"}
        2. Security: All data is encrypted and stored securely.{"\n"}
        3. Third Parties: We do not sell your data to any third party.{"\n\n"}
        For any questions, contact privacy@ecotracker.com.
      </Text>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1F2937",
  },
  content: { fontSize: 16, lineHeight: 24, color: "#4B5563" },
});

export default PrivacyPolicyScreen;
