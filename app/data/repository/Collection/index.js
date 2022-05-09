import {callAPI} from 'app/data/gateway/cloud';
import {AppConfig} from 'app/config';
import {QueryResource} from 'app/data/gateway/cloud/resource';

const search = (keyword, offset = 0, limit = 500) => {
    const {baseURL} = AppConfig.getConfig();
    const queryString = QueryResource.Search(keyword, offset, limit)
    const path = `${baseURL}${queryString}`;
    const options = {
        method: 'GET',
    };

    return callAPI(path, options);
};


export const CollectionRepository = {
    search
};

