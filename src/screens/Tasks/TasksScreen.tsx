import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckCircle2, Circle, Trophy, Zap } from "lucide-react-native";
import { ECO_TASKS } from "../../constants/ecoTasks";
import { styles } from "./Task.style";

const TasksScreen = () => {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    const saved = await AsyncStorage.getItem("dailyProgress");
    if (saved) {
      const parsed = JSON.parse(saved);
      setCompletedTasks(parsed);
      calculatePoints(parsed);
    }
  };

  const calculatePoints = (tasks: string[]) => {
    const points = tasks.reduce((acc, id) => {
      const task = ECO_TASKS.find((t) => t.id === id);
      return acc + (task ? task.points : 0);
    }, 0);
    setTotalPoints(points);
  };

  const toggleTask = async (id: string) => {
    let updatedTasks = [...completedTasks];
    if (updatedTasks.includes(id)) {
      updatedTasks = updatedTasks.filter((taskId) => taskId !== id);
    } else {
      updatedTasks.push(id);
    }
    setCompletedTasks(updatedTasks);
    calculatePoints(updatedTasks);
    await AsyncStorage.setItem("dailyProgress", JSON.stringify(updatedTasks));
  };

  const progress = (completedTasks.length / ECO_TASKS.length) * 100;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Daily Eco Tasks</Text>
          <Text style={styles.subtitle}>Small steps lead to big changes.</Text>
        </View>

        <View style={styles.scoreCard}>
          <View>
            <Text style={styles.scoreLabel}>Today's Score</Text>
            <Text style={styles.scoreValue}>{totalPoints} Points</Text>
          </View>
          <Trophy size={40} color="#FEF08A" />
        </View>

        <View style={styles.progressSection}>
          <View style={styles.progressTextRow}>
            <Text style={styles.progressLabel}>Completion Progress</Text>
            <Text style={styles.progressPercent}>{Math.round(progress)}%</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
          </View>
        </View>

        <View style={styles.listContainer}>
          {ECO_TASKS.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.7}
              onPress={() => toggleTask(item.id)}
              style={[
                styles.taskItem,
                completedTasks.includes(item.id) && styles.taskItemCompleted,
              ]}
            >
              <View style={styles.taskInfo}>
                {completedTasks.includes(item.id) ? (
                  <CheckCircle2 size={24} color="#22C55E" />
                ) : (
                  <Circle size={24} color="#94A3B8" />
                )}
                <Text
                  style={[
                    styles.taskText,
                    completedTasks.includes(item.id) &&
                      styles.taskTextCompleted,
                  ]}
                >
                  {item.task}
                </Text>
              </View>
              <View style={styles.pointBadge}>
                <Zap size={12} color="#EAB308" />
                <Text style={styles.pointText}>+{item.points}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default TasksScreen;