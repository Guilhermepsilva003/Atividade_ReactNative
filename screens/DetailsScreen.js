import React from "react";
import { View, Text } from "react-native";

export default function DetailsScreen({ route }) {
  const { user } = route.params;

  return (
    <View style={{
      flex: 1,
      backgroundColor: "#f8f8f8",
      padding: 20
    }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 15 }}>
        Detalhes do Usuário
      </Text>

      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        <Text style={{ fontWeight: "bold" }}>Nome:</Text> {user.name}
      </Text>

      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        <Text style={{ fontWeight: "bold" }}>Email:</Text> {user.email}
      </Text>

      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        <Text style={{ fontWeight: "bold" }}>Cidade:</Text> {user.address.city}
      </Text>

      <Text style={{ marginTop: 30, fontSize: 16, color: "#555" }}>
        🔍 Este app está consumindo dados de uma API pública chamada
        JSONPlaceholder. A tela anterior buscou uma lista de usuários reais da
        internet e exibiu aqui os detalhes de um deles.
      </Text>
    </View>
  );
}
