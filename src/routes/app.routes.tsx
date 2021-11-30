import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../screens/Dasboard';

export type BottomNavigatorParamsList = {
    Dashboard: undefined,
}

const { Navigator, Screen }  = createBottomTabNavigator<BottomNavigatorParamsList>();

export function AppRoutes() {

    return (
        <Navigator
            initialRouteName="Dashboard"
        >
            <Screen
                name="Dashboard"
                component={Dashboard}
            />
        </Navigator>
    );
}
