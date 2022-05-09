import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {appRoutes, appScreens} from 'app/presentation/module/navigation/route';
import {NavigationHelper} from 'app/presentation/module/navigation/helper';
import {appStrings} from 'app/presentation/theme';

export const AppNavigator = (props) => {
    const StackNavigator = createNativeStackNavigator();

    return (
        <StackNavigator.Navigator
            initialRouteName={appRoutes.Main.Search}>
            <StackNavigator.Screen
                name={appRoutes.Main.Search}
                component={appScreens.Search}
                options={{
                    title: appStrings.search,
                }}
            />
            <StackNavigator.Screen
                name={appRoutes.Main.Detail}
                component={appScreens.Detail}
                options={{
                    title: appStrings.detail,
                }}
            />
        </StackNavigator.Navigator>
    )
}


export const AppNavManager = {
    navigationRef: NavigationHelper.navigationRef,
    goBack: NavigationHelper.goBack,
};
