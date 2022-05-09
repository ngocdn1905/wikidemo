import {ReducerHelper} from 'app/presentation/redux/shared';

const Items = state => {
    const items = state.searchReducer?.data?._items;
    return items ? items : [];
}

const NextOffset = state => {
    const nextOffset = state.searchReducer?.data?._nextOffset;
    return nextOffset ? nextOffset : 0;
}

const TotalRecords = state => {
    const total = state.searchReducer?.data?._totalRecords;
    return total ? total : 0;
}

const Processing = state => {
    return ReducerHelper.isProcessing(state.searchReducer)
}

export const SearchSelector = {
    Items,
    NextOffset,
    TotalRecords,
    Processing
}
