import React, {useEffect, useState} from 'react'
import { Button, Alert } from 'react-native'
import {
    Container,
    Head,
    ForYouContent,
    ForContentTitle,
    ForYouList,
    Category,
} from './styles';

import {
    useNavigation,
} from '@react-navigation/native'
import { Input } from "../../components/Input";
import { BookItem } from "../../components/BookItem";
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomNavigatorParamsList } from '../../routes/app.routes';
import { StackNavigatorParamsList } from '../../routes/dashboard.routes';
import api from "../../services/api";

export interface BookMostReadData {
    primary_isbn10: string;
    title: string,
    author: string;
    book_image: string;
    rate_stars: number,
}

type HomeScreenProp = CompositeNavigationProp<
    BottomTabNavigationProp<BottomNavigatorParamsList, 'Dashboard'>,
    StackNavigationProp<StackNavigatorParamsList>
    >;

export function Home() {
    const navigation = useNavigation<HomeScreenProp>();

    function randomNumber(min: number, max: number) {
        const num = Math.random() * (max - min) + min;

        return Math.floor(num);
    }

    const [booksMostRead, setBooksMostRead] = useState<BookMostReadData[]>([]);
    useEffect(() => {
        async function loadMostReadBooks() {
            try {
                const { data } = await api.get('svc/books/v3/lists/overview.json');

                const booksMostRead: BookMostReadData[] = data.results.lists[0].books
                    .map((book: BookMostReadData) => ({
                        primary_isbn10: book.primary_isbn10,
                        title: book.title,
                        author: book.author,
                        book_image: book.book_image,
                        rate_stars: randomNumber(0, 5)
                    }));

                console.log(booksMostRead)
                setBooksMostRead(booksMostRead);

            } catch (error) {
                console.log(error);
                Alert.alert('Não foi possível carregar os livros mais lidos da semana')
            }
        }
        loadMostReadBooks();
    }, [])
    return (
        <Container>
            <Head>
                <Input placeholder="Qual livro você gostaria de ler hoje?" />
            </Head>
            <ForYouContent>
                <ForContentTitle>Para Você</ForContentTitle>
                <ForYouList
                    data={booksMostRead}
                    keyExtractor={item => item.primary_isbn10}
                    renderItem={({ item }) => <BookItem data={item} /> }
                />
            </ForYouContent>
            <Category>
                <Button title="Goto Category" onPress={() => { navigation.navigate('Category')}} />
            </Category>
        </Container>
    );
}

