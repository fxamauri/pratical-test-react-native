import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { Props } from '.';
import { Fontisto } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray_6}
  height: ${RFValue(50)}px;
  border-radius: 5px;
  padding: 0 20px;
`;

export const TInput = styled(TextInput).attrs(({ theme }) => ({
    placeholderTextColor: theme.colors.gray_3,
}))<Props>`
  flex: 1;
  align-self: stretch;
  color: ${({ theme }) => theme.colors.gray_2};
`;

export const Icon = styled(Fontisto).attrs({
    name: 'search'
})`
  color: ${({ theme }) => theme.colors.gray_3};
  font-size: ${RFValue(20)}px;
`;
