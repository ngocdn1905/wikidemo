import React from 'react';
import styled from 'styled-components/native';
import WebView from 'react-native-webview';
import {appColors, appDimensions} from 'app/presentation/theme';

export const DetailComponent = props => {
    const data = props.route.params?.data;
    const {pageId = null} = data;
    const url = `https://en.wikipedia.org/?curid=${pageId}`;

    return (
        <ViewContainer>
            <WebView source={{uri: url}}
                     style={{flex: 1, backgroundColor: appColors.White, padding: appDimensions.Spacing.Medium}}/>
        </ViewContainer>
    )
}


const ViewContainer = styled.View`
  flex: 1;
`

