import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(BorderlessButton)``;

export const Icon = styled(Feather).attrs({
    name: 'arrow-left'
})`
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(20)}px;
`;

