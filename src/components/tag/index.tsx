import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View, Image } from "react-native";
import { Container, ContainerLinha, ContainerTag, Title } from "./styles";
import Abrir from "./../../assets/edit.png";
import { ButtonIcon } from "../ButtonIcon";
import Tags from "react-native-tags";

export function Tag() {
  const [modalVisible, setModalVisible] = useState(false);

  function abrirModal() {
    setModalVisible(true);
  }
  return (
    <Container>
       <ContainerLinha>
      <Text>Tags salvas {}</Text>
      <ButtonIcon
        onPress={abrirModal}
        style={{ backgroundColor: "#5b77f7", borderRadius: 30 }}
      >
        <Image source={Abrir} />
      </ButtonIcon>
      </ContainerLinha>
      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <ContainerTag>
          <Tags
            initialText=""
            initialTags={["Javascript", "CSS", "React", "HTML"]}
            onChangeTags={(tags) => console.log(tags)}
            onTagPress={(index, tagLabel, event) =>
              console.log(index, tagLabel, event)
            }
            inputStyle={{
              backgroundColor: "white",
              borderRadius: 10,
            }}
          />
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>Cancelar</Text>
          </TouchableOpacity>
        </ContainerTag>
      </Modal>
    </Container>
  );
}

