import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListagemUsers } from "../screens/listagemUsers";
// import { Login } from "../screens/login";
import { ListagemRepo } from "../screens/listagemRepo";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      /> */}
        {/* <Stack.Screen
        name="Users"
        component={ListagemUsers}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="Repo"
        component={ListagemRepo}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
