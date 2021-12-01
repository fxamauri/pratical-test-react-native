import React from 'react'
import { StarsRate } from "../StarsRate";
import {
    Container,
    Cover,
    DisplayName,
    Author,
} from './styles';



interface Props {
    data: {
        title: string,
        author: string;
        book_image: string;
        rate_stars: number;
    }
}

export function BookItem({ data }: Props) {
    return (
        <Container>
            <Cover source={{ uri: data.book_image }} />
            <DisplayName>{data.title}</DisplayName>
            <Author>{data.author}</Author>
            <StarsRate number_rate={data.rate_stars} />
        </Container>
    );
}

