import React from 'react';
import styled from 'styled-components/native';
import {TextPrimary} from 'app/presentation/component/text';
import {appColors, appDimensions, appStrings} from 'app/presentation/theme';

export const FooterComponent = props => {
    const {previousAvailable = true, nextAvailable = true, onPressNext, onPressPrevious} = props;
    if (previousAvailable || nextAvailable) {
        return (
            <ViewContainer>
                <ViewActionContainer onPress={previousAvailable ? onPressPrevious : null}>
                    <TextAction visible={previousAvailable}>{appStrings.previous}</TextAction>
                </ViewActionContainer>
                <ViewActionContainer onPress={nextAvailable ? onPressNext : null}>
                    <TextAction visible={nextAvailable}>{appStrings.next}</TextAction>
                </ViewActionContainer>
            </ViewContainer>
        )
    } else {
        return null;
    }

}

const ViewContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: ${appDimensions.Spacing.Huge};
  padding-bottom: ${appDimensions.Spacing.Huge};
  padding-left: ${appDimensions.Spacing.Large};
  padding-right: ${appDimensions.Spacing.Large};
  background-color: ${appColors.Purple};
`;

const ViewActionContainer = styled.TouchableOpacity`
  padding-top: ${appDimensions.Spacing.Small};
  padding-bottom: ${appDimensions.Spacing.Small};
  padding-left: ${appDimensions.Spacing.Medium};
  padding-right: ${appDimensions.Spacing.Medium};
`;

const TextAction = styled(TextPrimary)`
  font-weight: bold;
  font-size: ${appDimensions.Font.Large};
  color: ${props => props.visible ? appColors.White : appColors.Transparent}
`;



