import axios, {AxiosRequestConfig} from 'axios';
import {Exception} from 'app/shared/constant';

const CancelToken = axios.CancelToken;
const defaultTimeOut = 30000;

const defaultOptions: AxiosRequestConfig = {
    headers: {
        Accept: 'application/json',
    },
    timeout: defaultTimeOut,
};

export const initialize = () => {
    axios.interceptors.request.use(
        function (config) {
            // Do something before request is sent
            return config;
        },
        function (error) {
            // Do something with request error
            return Promise.reject(error);
        },
    );

    // Add a response interceptor
    axios.interceptors.response.use(
        function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        },
        function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        },
    );
};

export const callAPI = (url, options) => {
    const source = CancelToken.source();
    setTimeout(() => {
        //Android ignores timeout, setTimeout is used for canceling the request
        source.cancel('cancelled by me');
    }, defaultTimeOut + 1000);
    const fetchOptions: AxiosRequestConfig = {
        ...defaultOptions,
        cancelToken: source.token,
        ...options,
    };
    return axios(url, fetchOptions)
        .then((response) => {
            const {status, data} = response;
            if (status >= 200 && status < 300) {
                return data;
            } else {
                return Promise.reject({
                    type: Exception.UnknownError,
                    message: 'An unknown error occurred',
                });
            }
        })
        .catch((error) => {
            console.log('api error', url, error);
            if (axios.isCancel(error)) {
                console.log('Request canceled', error.message);
                return Promise.reject({
                    type: Exception.RequestTimeOut,
                    message: 'Request timeout. Please check your internet connection.',
                });
            } else {
                let errorMessage;
                const {response, request} = error;
                if (response) {
                    //common error
                    const status = response.status;

                    if (status >= 500) {
                        errorMessage = 'There is an application error';
                    } else {
                        //TODO: parse error message from server
                        errorMessage = 'There is an application error';
                    }
                } else if (request) {
                    //response is empty
                    errorMessage = 'There is an application error';
                } else {
                    errorMessage = 'There is an application error';
                }
                return Promise.reject({
                    type: Exception.ServerError,
                    message: errorMessage,
                });
            }
        });
};


