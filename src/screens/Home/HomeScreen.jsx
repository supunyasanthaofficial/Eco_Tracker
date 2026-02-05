import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Home.styles";
import { Leaf, Flame, Cloud, Zap } from "lucide-react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, Supun! 👋</Text>
            <Text style={styles.subGreeting}>Let's save the planet today.</Text>
          </View>
          <View style={styles.avatarPlaceholder} />
        </View>

        <View style={styles.mainCard}>
          <View style={styles.cardInfo}>
            <Text style={styles.cardLabel}>Your Carbon Footprint</Text>
            <Text style={styles.cardValue}>
              12.5 <Text style={styles.cardUnit}>kg CO2e</Text>
            </Text>
            <View style={styles.trendBadge}>
              <Text style={styles.trendText}>↓ 5% from last week</Text>
            </View>
          </View>
          <Leaf
            size={60}
            color="rgba(255,255,255,0.3)"
            style={styles.cardIcon}
          />
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Zap size={24} color="#EAB308" />
            <Text style={styles.statLabel}>Energy</Text>
            <Text style={styles.statNum}>4.2 kWh</Text>
          </View>
          <View style={styles.statBox}>
            <Flame size={24} color="#EF4444" />
            <Text style={styles.statLabel}>Waste</Text>
            <Text style={styles.statNum}>1.8 kg</Text>
          </View>
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
            <Text style={styles.activityName}>Commuted by Bicycle</Text>
            <Text style={styles.activityTime}>2 hours ago</Text>
          </View>
          <Text style={styles.activityImpact}>-2.4 kg</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
