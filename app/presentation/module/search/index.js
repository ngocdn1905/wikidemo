import React, {useEffect, useState} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux'
import {appColors, appDimensions, appStrings} from 'app/presentation/theme';
import {QueryItemComponent} from 'app/presentation/module/search/component/QueryItem';
import {MainNavigator} from 'app/presentation/module/navigation/navigator';
import {requestSearch} from 'app/presentation/redux/action/search';
import {SearchSelector} from 'app/presentation/redux/selector/search';
import {FooterComponent} from 'app/presentation/module/search/component/Footer';

const LIMIT = 10;
const DEFAULT_KEYWORD = 'developer';

const keyExtractor = (item, index) => {
    return `item-${index}`;
};

const renderItem = ({index, item}) => {
    const onPress = () => {
        const {_pageId} = item;
        MainNavigator.openDetail({pageId: _pageId})
    }
    return (
        <QueryItemComponent index={index} data={item} onPress={onPress}/>
    )
}

export const SearchComponent = () => {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState(DEFAULT_KEYWORD);
    const searchItems = useSelector(SearchSelector.Items);
    const nextOffset = useSelector(SearchSelector.NextOffset);
    const totalRecords = useSelector(SearchSelector.TotalRecords);
    const isProcessing = useSelector(SearchSelector.Processing);
    const onTextChanged = text => {
        setKeyword(text);
    }
    useEffect(() => {
        dispatch(requestSearch(keyword, 0, LIMIT))
    }, [keyword])


    const nextAvailable = nextOffset < totalRecords;
    const previousAvailable = nextOffset - LIMIT > 0;

    const onPressPrevious = () => {
        const offset = nextOffset - LIMIT;
        dispatch(requestSearch(keyword, offset, LIMIT))
    }

    const onPressNext = () => {
        dispatch(requestSearch(keyword, nextOffset, LIMIT))
    }

    return (
        <ViewContainer>
            <InputKeyword
                value={keyword}
                onChangeText={onTextChanged}
                multiline={false}
                maxLength={50}
                placeholder={appStrings.enterKeyword}
            />

            <ViewContentContainer>

                <FlatList
                    style={{flex: 1}}
                    data={searchItems}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    initialNumToRender={5}
                    maxToRenderPerBatch={5}
                    updateCellsBatchingPeriod={100}
                    ListFooterComponent={<FooterComponent previousAvailable={previousAvailable}
                                                          nextAvailable={nextAvailable}
                                                          onPressPrevious={onPressPrevious}
                                                          onPressNext={onPressNext}/>}
                />

                {isProcessing &&
                <ViewProcessing>
                    <ActivityIndicator size={'large'}/>
                </ViewProcessing>
                }

            </ViewContentContainer>
        </ViewContainer>
    )
}

const ViewContainer = styled.View`
  flex: 1;
`

const InputKeyword = styled.TextInput`
  padding-top: ${appDimensions.Spacing.Medium};
  padding-bottom: ${appDimensions.Spacing.Medium};
  padding-left: ${appDimensions.Spacing.Medium};
  padding-right: ${appDimensions.Spacing.Medium};
  margin-top: ${appDimensions.Spacing.Medium};
  margin-bottom: ${appDimensions.Spacing.Large};
  margin-left: ${appDimensions.Spacing.Medium};
  margin-right: ${appDimensions.Spacing.Medium};
  border-width: ${appDimensions.Spacing.Min};
  border-radius: ${appDimensions.Spacing.Small};
  border-color: ${appColors.Black};
  background-color: ${appColors.White};
  font-size: ${appDimensions.Font.Medium};
`;

const ViewContentContainer = styled.View`
  flex: 1;
`;

const ViewProcessing = styled.View`
  position: absolute;
  z-index: 100;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: ${appColors.Black70};

`
