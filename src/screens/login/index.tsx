import React, { useState } from "react";
import { Container, Account, Logo } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextoPrincipal } from "../../components/TextoPrincipal";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";
import * as Yup from "yup";
import Git from "./../../assets/git.png";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleCreateUserAccount() {
    auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(() =>
        Alert.alert(
          "Usuário criado com sucesso, agora você pode fazer seu login"
        )
      )
      .catch((error) => {
        console.log(error.code);
        if (error.code === "auth/email-already-in-use") {
          Alert.alert(
            "Poxa, esse E-mail já esta em uso! Escolha outro email ou faça seu login."
          );
        }
        if (error.code === "auth/invalid-email") {
          Alert.alert("Poxa, esse E-mail não existe :(");
        }
        if (error.code === "auth/weak-password") {
          Alert.alert("A senha precisa ter no menos 6 digitos ou mais.");
        }
      });
  }

  async function handleSignIn() {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          senha: Yup.string()
            .required('A senha é obrigatória')
        });
    
        await schema.validate({ email, senha });
      auth()
        .signInWithEmailAndPassword(email, senha)
        .then(({ user }) => console.log(user))
        .catch((error) => {
          console.log(error.code);
          if (
            error.code === "auth/user-not-found" ||
            error.code === "auth/wrong-password"
          ) {
            Alert.alert("Usuário não encontrado. E-mail e/ou senha inválida!");
          }
        });
      }
      
  async function handleRedefinirSenha() {
    auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        Alert.alert(
          "Enviamos um link no seu e-mail para você redefinir sua senha."
        )
      );
  }

  return (
    <Container>
      <Logo source={Git} />
      <TextoPrincipal
        title="Faça seu Login"
        subtitle="Acesse 
        a nossa plataforma e tenha acesso a seus repositórios favoritos"
      />
      <Input
        placeholder="E-mail"
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <Input placeholder="Senha" onChangeText={setSenha} secureTextEntry />

      <Button title="Entrar" onPress={handleSignIn} />
      <Account>
        <ButtonText title="Esqueceu a senha?" onPress={handleRedefinirSenha} />
        <ButtonText
          title="Criar minha conta"
          onPress={handleCreateUserAccount}
        />
      </Account>
    </Container>
  );
}
