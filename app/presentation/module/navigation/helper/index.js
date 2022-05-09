import React from 'react';
import {CommonActions, StackActions} from '@react-navigation/native';

const navigationRef = React.createRef();

const navigate = (name, params = null) => {
    navigationRef.current?.navigate(name, params);
};

const navigateAndReset = (name, params = null) => {
    navigationRef.current?.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{name: name, params: params}],
        }),
    );
};

const goBack = () => {
    navigationRef.current?.goBack();
};

const popToTop = () => {
    navigationRef.current?.dispatch(StackActions.popToTop());
};

const push = (name, params = null) => {
    navigationRef.current?.dispatch(StackActions.push(name, params));
};

export const NavigationHelper = {
    navigationRef,
    navigate,
    navigateAndReset,
    goBack,
    popToTop,
    push,
};
