import React from 'react';
import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../screens/Dasboard';
import { useTheme } from "styled-components";

export type BottomNavigatorParamsList = {
    Dashboard: undefined,
    Category: undefined,
}

const { Navigator, Screen }  = createBottomTabNavigator<BottomNavigatorParamsList>();

export function AppRoutes() {
    const theme = useTheme();

    return (
        <Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                },
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.main,
            }}
        >
            <Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather
                            size={size}
                            color={color}
                            name="home"
                        />
                    )
                }}
            />
        </Navigator>
    );
}
