import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./AddActivity.styles";
import { Car, Zap, Trash2, ChevronRight } from "lucide-react-native";


import { saveActivity } from "../../services/ecoService"; 

const AddActivityScreen = () => {
  const [selectedType, setSelectedType] = useState("transport");
  const [amount, setAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSave = async () => {
   
    if (!amount || isNaN(parseFloat(amount))) {
      Alert.alert("Error", "Please enter a valid numeric amount");
      return;
    }

    setIsSubmitting(true);

    try {
      const numAmount = parseFloat(amount);
      
      
      const result = await saveActivity(selectedType, numAmount);

      if (result.success) {
        Alert.alert("Success", `${selectedType.toUpperCase()} activity logged!`);
        setAmount(""); 
      } else {
        Alert.alert("Error", "Failed to save data. Please check your connection.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong!");
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Log Activity</Text>
        <Text style={styles.subtitle}>
          Track your daily consumption to calculate impact
        </Text>

        <View style={styles.categoryRow}>
  
          <TouchableOpacity
            style={[
              styles.categoryBox,
              selectedType === "transport" && styles.selectedBox,
            ]}
            onPress={() => setSelectedType("transport")}
          >
            <Car
              color={selectedType === "transport" ? "#FFFFFF" : "#6B7280"}
              size={28}
            />
            <Text
              style={[
                styles.categoryText,
                selectedType === "transport" && styles.selectedText,
              ]}
            >
              Transport
            </Text>
          </TouchableOpacity>

        
          <TouchableOpacity
            style={[
              styles.categoryBox,
              selectedType === "energy" && styles.selectedBox,
            ]}
            onPress={() => setSelectedType("energy")}
          >
            <Zap
              color={selectedType === "energy" ? "#FFFFFF" : "#6B7280"}
              size={28}
            />
            <Text
              style={[
                styles.categoryText,
                selectedType === "energy" && styles.selectedText,
              ]}
            >
              Energy
            </Text>
          </TouchableOpacity>

         
          <TouchableOpacity
            style={[
              styles.categoryBox,
              selectedType === "waste" && styles.selectedBox,
            ]}
            onPress={() => setSelectedType("waste")}
          >
            <Trash2
              color={selectedType === "waste" ? "#FFFFFF" : "#6B7280"}
              size={28}
            />
            <Text
              style={[
                styles.categoryText,
                selectedType === "waste" && styles.selectedText,
              ]}
            >
              Waste
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            {selectedType === "transport"
              ? "Distance (km)"
              : selectedType === "energy"
                ? "Usage (kWh)"
                : "Weight (kg)"}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="0.00"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
            editable={!isSubmitting} 
          />
        </View>

        <TouchableOpacity 
          style={[styles.saveButton, isSubmitting && { opacity: 0.7 }]} 
          onPress={handleSave}
          disabled={isSubmitting} 
        >
          {isSubmitting ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <>
              <Text style={styles.saveButtonText}>Save Activity</Text>
              <ChevronRight color="#FFFFFF" size={20} />
            </>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddActivityScreen;