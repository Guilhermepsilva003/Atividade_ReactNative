import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#f5f5f5"
    }}>
      
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 15 }}>
        Bem-vindo!
      </Text>

      <Text style={{ fontSize: 18, color: "#555", marginBottom: 40, textAlign: "center" }}>
        Esse app demonstra como consumir uma API pública com React Native.
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#007AFF",
          paddingVertical: 15,
          paddingHorizontal: 30,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate("Users")}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          Ver usuários
        </Text>
      </TouchableOpacity>

    </View>
  );
}
