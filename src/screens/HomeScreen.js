import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function HomeScreen() {
  const [inputText, setInputText] = useState("");

  const handleScan = () => {
    console.log("Scanning message:", inputText);
    // This is where Phase 1 AI logic will go later!
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Scam Scanner</Text>
      <Text style={styles.subtitle}>
        Paste a suspicious message, email, or URL below.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Type or paste here..."
        placeholderTextColor="#999"
        multiline
        numberOfLines={6}
        value={inputText}
        onChangeText={setInputText}
      />

      <TouchableOpacity style={styles.button} onPress={handleScan}>
        <Text style={styles.buttonText}>Analyze Content</Text>
      </TouchableOpacity>

      {/* Placeholder for Results - Phase 1 */}
      <View style={styles.resultPlaceholder}>
        <Text style={styles.placeholderText}>
          Results will appear here after scanning.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    flexGrow: 1,
    alignItems: "center",
  },
  header: { fontSize: 28, fontWeight: "bold", color: "#333", marginTop: 40 },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
    minHeight: 150,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  resultPlaceholder: {
    marginTop: 30,
    width: "100%",
    padding: 20,
    borderRadius: 12,
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "#ccc",
    alignItems: "center",
  },
  placeholderText: { color: "#999", fontStyle: "italic" },
});
