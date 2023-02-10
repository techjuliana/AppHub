import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Buscar } from "../screens/buscar";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Buscar"
        component={Buscar}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
