import React, { useState } from "react";
import { Modal, Text, Image } from "react-native";
import * as S from "./styles";
import Abrir from "./../../assets/edit.png";
import { ButtonIcon } from "../ButtonIcon";
import Tags from "react-native-tags";
import { Button } from "../Button";
import { TextoPrincipal } from "../TextoPrincipal";

export function Tag() {
  const [modalVisible, setModalVisible] = useState(false);

  function abrirModal() {
    setModalVisible(true);
  }
  return (
    <S.Container>
      <S.ContainerLinha>
        <Text>Tags salvas {}</Text>
        <ButtonIcon
          onPress={abrirModal}
          style={{ backgroundColor: "#5b77f7", borderRadius: 30 }}
        >
          <Image source={Abrir} />
        </ButtonIcon>
      </S.ContainerLinha>
      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <S.ContainerB>
          <S.ContainerTag>
            <TextoPrincipal
              title={"Tags"}
              subtitle={
                "Edite, exclua e adicione Tags em seu repositório favorito"
              }
            />
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
            <Button
              style={{ marginTop: 40 }}
              onPress={() => setModalVisible(false)}
              title={"Salvar"}
            ></Button>
          </S.ContainerTag>
        </S.ContainerB>
      </Modal>
    </S.Container>
  );
}
