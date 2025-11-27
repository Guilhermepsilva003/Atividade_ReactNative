import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";

export default function UsersScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log("Erro ao carregar:", error);
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 28, marginBottom: 20, fontWeight: "bold" }}>
        Usuários
      </Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 15,
              marginBottom: 15,
              borderRadius: 10,
              backgroundColor: "#f0f0f0",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 16, color: "#555" }}>
              {item.email}
            </Text>

            <TouchableOpacity
              style={{
                marginTop: 10,
                backgroundColor: "#007AFF",
                paddingVertical: 10,
                borderRadius: 8,
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("Details", { user: item })}
            >
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
                Detalhes
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
