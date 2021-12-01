import React from 'react'
import { TextInputProps } from 'react-native';
import {
    Container,
    Icon,
    TInput
} from './styles';


export type Props = Omit<TextInputProps, 'placeholderTextColor'>

export function Input(props: Props) {
    return (
        <Container  >
            <TInput {...props} />
            <Icon />
        </Container>
    );
}

