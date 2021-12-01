import React from 'react'
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { Container, Photo } from './styles';


export function ProfileButton(props: BorderlessButtonProps) {
  return (
      <Container {...props} >
          <Photo />
      </Container>
  );
}

