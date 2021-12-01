import styled from 'styled-components/native';
import { Text } from 'react-native';
import {RFValue} from "react-native-responsive-fontsize";

export const Container = styled.View`
  
  width: ${RFValue(104)}px;
  height: ${RFValue(226)}px;
  margin: 0 12px;
`;

export const DisplayName = styled(Text).attrs({
    numberOfLines: 2,
})`
  margin-top: 5px;
  height: ${RFValue(36)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.gray_1};;
`;

export const Author = styled(Text).attrs({
    numberOfLines: 1,
})`
  
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.gray_2};;
`;


export const Cover = styled.Image`
  width: ${RFValue(104)}px;
  height: ${RFValue(160)}px;
`;
