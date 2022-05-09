import {ActionHelper} from 'app/presentation/redux/shared';

const SEARCH_ACTION_NAME = 'ACTION_SEARCH';

export const REQUEST_SEARCH = ActionHelper.createAction(SEARCH_ACTION_NAME);
export const REQUEST_SEARCH_SUCCESS = ActionHelper.createSuccess(SEARCH_ACTION_NAME);
export const REQUEST_SEARCH_FAILURE = ActionHelper.createFailure(SEARCH_ACTION_NAME);

export const requestSearch = (keyword, offset, limit) => ({
    type: REQUEST_SEARCH,
    payload: {
        keyword,
        offset,
        limit
    },
});

export const receiveSearchSuccess = (data) => ({
    type: REQUEST_SEARCH_SUCCESS,
    payload: data,
});

export const receiveSearchFailure = (error) => ({
    type: REQUEST_SEARCH_FAILURE,
    payload: error,
});
