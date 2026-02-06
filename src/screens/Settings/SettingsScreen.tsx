import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  User,
  Bell,
  Shield,
  Moon,
  LogOut,
  ChevronRight,
  HelpCircle,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Settings.styles";
import { useUser } from "../../context/UserContext";

const SettingsScreen = () => {
  const navigation = useNavigation<any>();
  const { user, setUser } = useUser();
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);

  const handleLogout = () => {
    setUser(null);

    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  const SettingItem = ({
    icon: Icon,
    title,
    value,
    isSwitch,
    onValueChange,
    showChevron = true,
  }: any) => (
    <TouchableOpacity
      style={styles.settingItem}
      disabled={isSwitch}
      activeOpacity={0.7}
    >
      <View style={styles.itemLeft}>
        <View style={styles.iconWrapper}>
          <Icon size={20} color="#4B5563" />
        </View>
        <Text style={styles.itemTitle}>{title}</Text>
      </View>

      {isSwitch ? (
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{ false: "#E5E7EB", true: "#86EFAC" }}
          thumbColor={value ? "#22C55E" : "#F9FAFB"}
        />
      ) : (
        <View style={styles.itemRight}>
          {value && <Text style={styles.itemValue}>{value}</Text>}
          {showChevron && <ChevronRight size={20} color="#9CA3AF" />}
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.headerTitle}>Settings</Text>

        <View style={styles.profileCard}>
          <View style={styles.avatarLarge}>
            <Text style={{ color: "#FFF", fontSize: 24, fontWeight: "bold" }}>
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>
              {user?.name || "Eco Tracker User"}
            </Text>
            <Text style={styles.profileEmail}>
              {user?.email || "No email provided"}
            </Text>
          </View>
          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.editBtnText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Account</Text>
          <SettingItem icon={User} title="Personal Information" />
          <SettingItem
            icon={Bell}
            title="Notifications"
            isSwitch
            value={notifications}
            onValueChange={setNotifications}
          />
          <SettingItem
            icon={Moon}
            title="Dark Mode"
            isSwitch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Support & Legal</Text>
          <SettingItem icon={Shield} title="Privacy Policy" />
          <SettingItem icon={HelpCircle} title="Help Center" />
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <LogOut size={20} color="#EF4444" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
