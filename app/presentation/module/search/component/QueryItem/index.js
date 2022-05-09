import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {TextPrimary} from 'app/presentation/component/text';
import {appColors, appDimensions, appStrings} from 'app/presentation/theme';

export const QueryItemComponent = props => {
    const {index, data, onPress} = props;
    const {_title, _snippet} = data;

    return (
        <ViewContainer index={index}>
            <TextTitle>{_title}</TextTitle>
            <ViewContent>
                <TextDesc numberOfLines={5}>{_snippet}</TextDesc>
                <ViewGo onPress={onPress}>
                    <TextGo>{appStrings.go.toUpperCase()}</TextGo>
                </ViewGo>
            </ViewContent>

        </ViewContainer>
    )
}

const ViewContainer = styled.View`
  width: 100%;
  padding-top: ${appDimensions.Spacing.Small};
  padding-bottom: ${appDimensions.Spacing.Small};
  padding-left: ${appDimensions.Spacing.Medium};
  padding-right: ${appDimensions.Spacing.Medium};
  background-color: ${props => props.index % 2 === 0 ? appColors.White : appColors.Transparent};
`;

const TextTitle = styled(TextPrimary)`
  padding-top: ${appDimensions.Spacing.Small};
  padding-bottom: ${appDimensions.Spacing.Small};
  font-weight: bold;
  font-size: ${appDimensions.Font.Large};
  color: ${appColors.Orange};
`;

const ViewContent = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const TextDesc = styled(TextPrimary)`
  flex: 1;
  padding-top: ${appDimensions.Spacing.Small};
  padding-bottom: ${appDimensions.Spacing.Small};
  font-size: ${appDimensions.Font.Medium};
  color: ${appColors.Black};
`

const ViewGo = styled.TouchableOpacity`
  padding-top: ${appDimensions.Spacing.Small};
  padding-bottom: ${appDimensions.Spacing.Small};
  padding-left: ${appDimensions.Spacing.Medium};
  padding-right: ${appDimensions.Spacing.Medium};
`

const TextGo = styled(TextPrimary)`
  font-weight: bold;
  font-size: ${appDimensions.Font.Medium};
  color: ${appColors.Blue};
`;


