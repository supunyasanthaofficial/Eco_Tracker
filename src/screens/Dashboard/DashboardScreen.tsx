import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import { LineChart } from "react-native-chart-kit";
import { styles } from "./Dashboard.styles";
import { getEcoStats } from "../../services/ecoService";

interface EcoData {
  carbonFootprint: number;
  energy: number;
  waste: number;
  trends: number[];
  percentages: {
    transport: number;
    energy: number;
    waste: number;
  };
}

const DashboardScreen: React.FC = () => {
  const screenWidth = Dimensions.get("window").width;
  const [stats, setStats] = useState<EcoData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useFocusEffect(
    useCallback(() => {
      let isMounted = true;
      const fetchDashboardData = async () => {
        const data = await getEcoStats();
        if (isMounted) {
          if (data) {
            setStats(data as EcoData);
          }
          setLoading(false);
        }
      };
      fetchDashboardData();
      return () => { isMounted = false; };
    }, [])
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F9FAFB" }}>
        <ActivityIndicator size="large" color="#22C55E" />
      </View>
    );
  }

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      data: stats?.trends && stats.trends.length === 7 ? stats.trends : [0, 0, 0, 0, 0, 0, 0],
      color: (opacity = 1) => `rgba(34, 197, 94, ${opacity})`,
      strokeWidth: 3,
    }],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Analytics</Text>
        <Text style={styles.subtitle}>Your emission trends for this week</Text>

        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Daily CO2 Emission (kg)</Text>
          <LineChart
            data={chartData}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 1,
              color: (opacity = 1) => `rgba(34, 197, 94, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(107, 114, 128, ${opacity})`,
              propsForDots: { r: "6", strokeWidth: "2", stroke: "#22C55E" },
            }}
            bezier
            style={{ marginVertical: 8, borderRadius: 16 }}
          />
        </View>

        <View style={styles.breakdownCard}>
          <Text style={styles.breakdownTitle}>Top Contributors</Text>

        
          <View style={styles.row}>
            <Text style={styles.rowLabel}>🚗 Transport</Text>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressFill, { width: `${stats?.percentages?.transport || 0}%`, backgroundColor: "#EF4444" }]} />
            </View>
            <Text style={styles.rowValue}>{stats?.percentages?.transport || 0}%</Text>
          </View>


          <View style={styles.row}>
            <Text style={styles.rowLabel}>⚡ Electricity</Text>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressFill, { width: `${stats?.percentages?.energy || 0}%`, backgroundColor: "#EAB308" }]} />
            </View>
            <Text style={styles.rowValue}>{stats?.percentages?.energy || 0}%</Text>
          </View>

 
          <View style={styles.row}>
            <Text style={styles.rowLabel}>🗑️ Waste</Text>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressFill, { width: `${stats?.percentages?.waste || 0}%`, backgroundColor: "#3B82F6" }]} />
            </View>
            <Text style={styles.rowValue}>{stats?.percentages?.waste || 0}%</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;