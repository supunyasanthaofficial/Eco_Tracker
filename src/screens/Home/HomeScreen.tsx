import React, { useState, useCallback, useMemo } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { styles } from "./Home.styles";
import {
  Leaf,
  Flame,
  Cloud,
  Zap,
  Lightbulb,
  Activity,
} from "lucide-react-native";

import TasksList from "../../components/TaskList";
import { getEcoStats } from "../../services/ecoService";
import { getAirPollution } from "../../api/client";
import { useUser } from "../../context/UserContext";
import { ECO_TIPS } from "../../constants/ecoTips";

interface EcoStats {
  carbonFootprint: number;
  energy: number;
  waste: number;
}

const HomeScreen = () => {
  const [stats, setStats] = useState<EcoStats | null>(null);
  const [airQuality, setAirQuality] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const navigation = useNavigation<any>();

  const dailyTip = useMemo(() => {
    return (
      ECO_TIPS[Math.floor(Math.random() * ECO_TIPS.length)] || {
        description: "Start small for a greener earth!",
      }
    );
  }, []);

  const getAQIStatus = (aqi: number) => {
    const statusMap: any = {
      1: { label: "Excellent ✅", color: "#22C55E" },
      2: { label: "Good 👍", color: "#84CC16" },
      3: { label: "Moderate ⚠️", color: "#EAB308" },
      4: { label: "Poor 😷", color: "#F97316" },
      5: { label: "Hazardous 🚨", color: "#EF4444" },
    };
    return statusMap[aqi] || { label: "Unknown", color: "#6B7280" };
  };

  useFocusEffect(
    useCallback(() => {
      let isMounted = true;
      const fetchData = async () => {
        try {
          const ecoData = await getEcoStats();
          const pollutionData = await getAirPollution(6.9271, 79.8612);
          if (isMounted) {
            setStats(ecoData as EcoStats);
            if (pollutionData?.list) {
              setAirQuality(pollutionData.list[0]);
            }
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          if (isMounted) setLoading(false);
        }
      };
      fetchData();
      return () => {
        isMounted = false;
      };
    }, []),
  );

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F8FAFC",
        }}
      >
        <ActivityIndicator size="large" color="#22C55E" />
        <Text style={{ marginTop: 10, color: "#6B7280" }}>
          Fetching real-time data...
        </Text>
      </View>
    );
  }

  const aqiInfo = getAQIStatus(airQuality?.main?.aqi);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.greeting}>
            Hello, {user?.name || "Eco Hero"}! 👋
          </Text>
          <Text style={styles.subGreeting}>Let's save the planet today.</Text>
        </View>

        <View style={styles.mainCard}>
          <View style={styles.cardInfo}>
            <Text style={styles.cardLabel}>Your Carbon Footprint</Text>
            <Text style={styles.cardValue}>
              {stats?.carbonFootprint ?? "0.0"}{" "}
              <Text style={styles.cardUnit}>kg CO2e</Text>
            </Text>
            <View style={styles.trendBadge}>
              <Text style={styles.trendText}>Calculated from logs</Text>
            </View>
          </View>
          <Leaf
            size={60}
            color="rgba(255,255,255,0.3)"
            style={styles.cardIcon}
          />
        </View>

        <View
          style={[
            styles.activityItem,
            {
              marginVertical: 10,
              borderLeftWidth: 4,
              borderLeftColor: aqiInfo.color,
            },
          ]}
        >
          <View
            style={[
              styles.activityIcon,
              { backgroundColor: `${aqiInfo.color}20` },
            ]}
          >
            <Activity size={20} color={aqiInfo.color} />
          </View>
          <View style={styles.activityDetails}>
            <Text style={styles.activityName}>Real-time Air Quality (AQI)</Text>
            <Text style={{ color: aqiInfo.color, fontWeight: "bold" }}>
              {aqiInfo.label}
            </Text>
          </View>
          <Text style={styles.activityImpact}>
            Level {airQuality?.main?.aqi || "N/A"}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            padding: 16,
            borderRadius: 16,
            flexDirection: "row",
            alignItems: "center",
            elevation: 2,
            marginBottom: 15,
          }}
        >
          <View
            style={{
              backgroundColor: "#FEF9C3",
              padding: 10,
              borderRadius: 12,
              marginRight: 15,
            }}
          >
            <Lightbulb size={24} color="#EAB308" />
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{ fontSize: 14, fontWeight: "bold", color: "#1F2937" }}
            >
              Daily Eco Tip
            </Text>
            <Text style={{ fontSize: 13, color: "#4B5563", marginTop: 2 }}>
              {dailyTip.description}
            </Text>
          </View>
        </View>


        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Zap size={24} color="#EAB308" />
            <Text style={styles.statLabel}>Energy Usage</Text>
            <Text style={styles.statNum}>{stats?.energy ?? "0.0"} kWh</Text>
          </View>
          <View style={styles.statBox}>
            <Flame size={24} color="#EF4444" />
            <Text style={styles.statLabel}>Total Waste</Text>
            <Text style={styles.statNum}>{stats?.waste ?? "0.0"} kg</Text>
          </View>
        </View>

    
        <View style={{ marginTop: 10, marginBottom: 15 }}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Daily Eco Tasks</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Tasks")}>
              <Text style={styles.seeAll}>View All</Text>
            </TouchableOpacity>
          </View>
          <TasksList />
        </View>


        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.activityItem}>
          <View style={[styles.activityIcon, { backgroundColor: "#DCFCE7" }]}>
            <Cloud size={20} color="#16A34A" />
          </View>
          <View style={styles.activityDetails}>
            <Text style={styles.activityName}>Latest Log Added</Text>
            <Text style={styles.activityTime}>Just now</Text>
          </View>
          <Text style={styles.activityImpact}>Live</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
