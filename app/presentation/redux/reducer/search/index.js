import {
    REQUEST_SEARCH,
    REQUEST_SEARCH_SUCCESS,
    REQUEST_SEARCH_FAILURE,
} from 'app/presentation/redux/action/search';
import {ReducerHelper} from 'app/presentation/redux/shared';


const initialState = {
    success: false,
    data: null,
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_SEARCH:
            return ReducerHelper.createBase(state, action);
        case REQUEST_SEARCH_SUCCESS:
            return ReducerHelper.createSuccess(state, action);
        case REQUEST_SEARCH_FAILURE:
            return ReducerHelper.createFailure(state, action);
    }
    return state;
}
