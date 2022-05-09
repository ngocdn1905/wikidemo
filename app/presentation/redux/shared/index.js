import {ActionPrefix, ActionStatus} from 'app/presentation/redux/constant';

const createAction = (actionName) => {
    return `${ActionPrefix.REQUEST}_${actionName}`;
};

const createSuccess = (actionName) => {
    return `${ActionPrefix.REQUEST}_${actionName}_${ActionPrefix.REQUEST_SUCCESS}`;
};

const createFailure = (actionName) => {
    return `${ActionPrefix.REQUEST}_${actionName}_${ActionPrefix.REQUEST_FAILURE}`;
};

const createBaseReducer = (state, action) => {
    return {
        ...state,
        actionType: action.type,
        params: action.payload,
        status: ActionStatus.PROCESSING
    };
};

const createSuccessReducer = (state, action) => {
    return {
        ...state,
        data: action.payload,
        status: ActionStatus.DONE
    };
};

const createFailureReducer = (state, action) => {
    return {
        ...state,
        error: action.payload,
        status: ActionStatus.DONE
    };
};


const isProcessing = (reducer) => {
    return reducer.status === ActionStatus.PROCESSING
}

export const ActionHelper = {
    createAction,
    createSuccess,
    createFailure
};

export const ReducerHelper = {
    createBase: createBaseReducer,
    createSuccess: createSuccessReducer,
    createFailure: createFailureReducer,
    isProcessing,
};



