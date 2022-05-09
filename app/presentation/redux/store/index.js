import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from 'app/presentation/redux/reducer';
import rootSaga from 'app/presentation/redux/saga'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
    const middleware = [sagaMiddleware];
    if (__DEV__) {
        //middleware.push(createLogger());
    }
    const store = createStore(
        rootReducer,
        applyMiddleware(...middleware)
    );
    sagaMiddleware.run(rootSaga);
    return store;
};
