import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components';
import { LeftButton } from '../components/LeftButton';
import { ProfileButton } from '../components/ProfileButton';
import { RFValue } from 'react-native-responsive-fontsize';
import { Home } from '../screens/Home';
import { Category } from '../screens/Category';

export type StackNavigatorParamsList = {
    Home: undefined;
    Category: undefined;
}

const { Navigator, Screen }  = createStackNavigator<StackNavigatorParamsList>();

export function DasboardRoutes() {
    const theme = useTheme();

    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTitleAlign: 'left',
                headerLeftContainerStyle: {
                    paddingHorizontal: 15,
                },
                headerStyle: {
                    elevation: 0,
                    backgroundColor: theme.colors.white,
                    shadowColor: 'transparent',
                    height: RFValue(80)
                },
                headerTitleStyle: {
                    marginLeft: 10,
                    fontSize: RFValue(18),
                    fontFamily: theme.fonts.bold,
                },
            }}
        >
            <Screen
                name="Home"
                component={Home}
                options={() => ({
                    headerShown: true,
                    title: 'Bookshelf',
                    headerRightContainerStyle: {
                        paddingRight: 15,
                    },
                    headerRight: () => (
                        <ProfileButton />
                    )
                })}
            />
            <Screen
                name="Category"
                component={Category}
                options={() => ({
                    headerShown: true,
                    title: 'Categoria',
                    headerLeft: (props) => (
                        <LeftButton {...props} />
                    )
                })}
            />
        </Navigator>
    );
}
