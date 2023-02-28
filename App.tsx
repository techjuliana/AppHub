import { Routes } from "./src/routes";
import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="#7e7e7e" barStyle="light-content" />
      <Routes />
    </ThemeProvider>
  );
}
