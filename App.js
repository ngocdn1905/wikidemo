import React from 'react';
import {LogBox} from 'react-native';
import {MainComponent} from 'app/presentation/module/main';

export default () => {
    return <MainComponent/>
};


LogBox.ignoreLogs([
    'Expected style',
    'Non-serializable values were found in the navigation state',
    'Require cycle',
]);


