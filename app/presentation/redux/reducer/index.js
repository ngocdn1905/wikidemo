import {combineReducers} from 'redux';
import searchReducer from 'app/presentation/redux/reducer/search';

export const rootReducer = combineReducers({
    searchReducer,
});
