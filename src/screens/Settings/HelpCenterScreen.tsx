import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HelpCenterScreen = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>Help Center</Text>

      <View style={styles.faqSection}>
        <Text style={styles.question}>How do I track my carbon footprint?</Text>
        <Text style={styles.answer}>
          Go to the 'Add' tab and log your daily transportation and energy
          usage.
        </Text>
      </View>

      <View style={styles.faqSection}>
        <Text style={styles.question}>What is AQI?</Text>
        <Text style={styles.answer}>
          Air Quality Index (AQI) tells you how clean or polluted your air is.
        </Text>
      </View>

      <Text style={styles.footer}>Contact us: support@ecotracker.com</Text>
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
  faqSection: { marginBottom: 20 },
  question: {
    fontSize: 18,
    fontWeight: "600",
    color: "#22C55E",
    marginBottom: 5,
  },
  answer: { fontSize: 16, color: "#4B5563" },
  footer: { marginTop: 30, color: "#9CA3AF", textAlign: "center" },
});

export default HelpCenterScreen;
