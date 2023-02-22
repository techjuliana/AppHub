import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Tags from "react-native-tags";
import { Container, Title } from './styles'


export function ModalTag() {
  return (
    <Container activeOpacity={0.8}>
       <Tags
        initialText=""
        initialTags={["Javascript", "CSS", "React"]}
        onChangeTags={(tags) => console.log(tags)}
        onTagPress={(index, tagLabel, event) =>
          console.log(index, tagLabel, event)
        }
        inputStyle={{
          backgroundColor: "white",
          borderRadius: 10
        }}
      />
    </Container>
  );
}
