import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    receiveSearchFailure,
    receiveSearchSuccess,
    REQUEST_SEARCH,
} from 'app/presentation/redux/action/search';
import {searchByKeywordUseCase} from 'app/domain/usecase';

export function* searchByKeyword(action) {
    try {
        const {keyword, offset, limit} = action.payload;
        const data = yield call(searchByKeywordUseCase, keyword, offset, limit);
        yield put(receiveSearchSuccess(data))
    } catch (ex) {
        yield put(receiveSearchFailure(ex));
    }
}


export default function* SearchSaga() {
    yield takeLatest(REQUEST_SEARCH, searchByKeyword)
}
