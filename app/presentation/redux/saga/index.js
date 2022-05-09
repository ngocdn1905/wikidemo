import {all} from 'redux-saga/effects';
import SearchSaga from 'app/presentation/redux/saga/search';

export default function* rootSaga() {
    yield all([
        SearchSaga()
    ])
}
