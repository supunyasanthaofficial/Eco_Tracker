import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckCircle2, Circle, Zap } from "lucide-react-native";
import { ECO_TASKS } from "../constants/ecoTasks";

const TasksList = () => {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    const saved = await AsyncStorage.getItem("dailyProgress");
    if (saved) setCompletedTasks(JSON.parse(saved));
  };

  const toggleTask = async (id: string) => {
    let updatedTasks = [...completedTasks];
    if (updatedTasks.includes(id)) {
      updatedTasks = updatedTasks.filter((taskId) => taskId !== id);
    } else {
      updatedTasks.push(id);
    }
    setCompletedTasks(updatedTasks);
    await AsyncStorage.setItem("dailyProgress", JSON.stringify(updatedTasks));
  };

  return (
    <View style={styles.listContainer}>
      {ECO_TASKS.slice(0, 3).map((item) => (
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
              <CheckCircle2 size={20} color="#22C55E" />
            ) : (
              <Circle size={20} color="#94A3B8" />
            )}
            <Text
              style={[
                styles.taskText,
                completedTasks.includes(item.id) && styles.taskTextCompleted,
              ]}
            >
              {item.task}
            </Text>
          </View>
          <View style={styles.pointBadge}>
            <Zap size={10} color="#EAB308" />
            <Text style={styles.pointText}>+{item.points}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: { gap: 10, marginTop: 10 },
  taskItem: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#F1F5F9",
  },
  taskItemCompleted: { borderColor: "#22C55E", backgroundColor: "#F0FDF4" },
  taskInfo: { flexDirection: "row", alignItems: "center", flex: 1 },
  taskText: { marginLeft: 10, fontSize: 14, color: "#334155" },
  taskTextCompleted: { color: "#166534", textDecorationLine: "line-through" },
  pointBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEF9C3",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
  },
  pointText: {
    marginLeft: 3,
    fontSize: 10,
    fontWeight: "bold",
    color: "#854D0E",
  },
});

export default TasksList;
