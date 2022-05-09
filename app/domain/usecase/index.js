import {CollectionRepository} from 'app/data/repository/Collection';
import ErrorModel from 'app/shared/model/Error';
import QueryResponseModel from 'app/shared/model/QueryResponse';

export const searchByKeywordUseCase = (keyword, offset = 0, limit = 500) => {
    return CollectionRepository.search(keyword, offset, limit).then(response => {
            return QueryResponseModel.fromResponse(response)
        }
    ).catch(error => {
        //TODO: convert to error object
        return Promise.reject(ErrorModel.fromError(error));
    })
}
