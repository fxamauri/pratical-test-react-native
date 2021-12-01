import React from 'react'
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { Container, Icon } from './styles';


export function LeftButton(props: BorderlessButtonProps) {
  return (
      <Container {...props} >
          <Icon />
      </Container>
  );
}

