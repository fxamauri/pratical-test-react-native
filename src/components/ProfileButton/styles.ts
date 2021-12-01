import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(BorderlessButton)``;

export const Photo = styled.Image.attrs(() => ({
    source: require('../../assets/profile-image.png'),
}))`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  border-radius: 32px;
`;
