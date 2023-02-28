import { Container } from "./styles";
import { Button } from "../Button";
import analytics from "@react-native-firebase/analytics";
import auth from "@react-native-firebase/auth";
import React from "react";

export function Sair() {
  function SairApp() {
    auth().signOut();
  }

  async function onPressAnalytics() {
    await analytics().logEvent("Saiu_do_APP", {
      id: "123123",
      value: "value",
      variable: "variable",
    });
    console.log(onPressAnalytics, "firebase analytics");
  }

  function ExecuteOsDois() {
    onPressAnalytics();
    SairApp();
  }

  return (
    <Container>
      <Button
        style={{ padding: 10 }}
        title="Sair do Aplicativo"
        onPress={ExecuteOsDois}
      />
    </Container>
  );
}
