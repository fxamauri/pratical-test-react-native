import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList, FlatListProps } from 'react-native';
import { BookMostReadData } from '.';
export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background}
`;

export const Head = styled.View`
    margin-top: 30px;
    padding: 0 15px;
`;

export const ForYouContent = styled.View`
    margin: 30px 0;
`;

export const ForContentTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  padding-left: 15px;
  color: ${({ theme }) => theme.colors.gray_1};
  margin-bottom: 10px;
`;

export const ForYouList = styled(
    FlatList as new (props: FlatListProps<BookMostReadData>) => FlatList<BookMostReadData>
).attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})``;

export const Category = styled.View``;

export const MostRead = styled.View``;
