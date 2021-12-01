import styled, { css } from 'styled-components/native';
import { Entypo } from '@expo/vector-icons'

interface StarProps {
    paint: boolean;
}

export const Container = styled.View`
    flex-direction: row;
`;


export const Star = styled(Entypo).attrs({
    name: 'star'
})<StarProps>`
  ${({ paint }) => paint && css`
    color: ${({ theme }) => theme.colors.primary};
  `};
`;
