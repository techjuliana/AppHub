import React, { useEffect, useState } from "react";
import { AppRoutes } from "./app.routes";
import { View } from "react-native";
import { Login } from "../screens/login";
import auth from "@react-native-firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
type User = {
  uid: String;
};

export function Routes() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const inscrito = auth().onAuthStateChanged((userInfo) => {
      setUser(userInfo);
    });

    return inscrito;
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#cacacc" }}>
      <NavigationContainer>
        {user ? <AppRoutes /> : <Login />}
      </NavigationContainer>
    </View>
  );
}
