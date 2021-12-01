import React from 'react'
import {
    Container,
    Star,
} from './styles';

interface Props {
    number_rate: number;
}

export function StarsRate({ number_rate }: Props) {
    const total = 5;
    const restPadd = total - number_rate;

    function createArray(total: number) {
        return Array.from(Array(total).keys());
    }
    return (
        <Container>
            {createArray(number_rate).map((value, index) => (
                <Star key={value} name="star" paint/>
            ))}
            {createArray(restPadd).map((value, index) => (
                <Star key={value} name="star" paint={false} />
            ))}
        </Container>
    );
}

