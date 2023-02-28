import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListagemUsers } from "../screens/listagemUsers";
import { ListagemRepo } from "../screens/listagemRepo";
import { Perfil } from "../screens/perfil";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="usuarios"
        component={ListagemUsers}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="listaRepositorios"
        component={ListagemRepo}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sobre"
        component={Perfil}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
