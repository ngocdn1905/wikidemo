import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from "react-redux";
import {AppNavigator, AppNavManager} from 'app/presentation/module/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import configureStore from 'app/presentation/redux/store';

const store = configureStore();

export const MainComponent = () => {

    return (
        <Provider store={store}>
            <ThemeProvider theme={{}}>
                <NavigationContainer
                    ref={AppNavManager.navigationRef}>
                    <StatusBar
                        translucent
                        backgroundColor={'transparent'}
                        barStyle={'dark-content'}
                    />
                    <AppNavigator/>
                </NavigationContainer>
            </ThemeProvider>
        </Provider>
    )
}
