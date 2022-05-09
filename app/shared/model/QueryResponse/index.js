import QueryResultModel from 'app/shared/model/QueryResult';

export default class QueryResponseModel {
    _totalRecords = 0;
    _items = null;
    _nextOffset = 0;

    static fromResponse = (response) => {
        const model = new QueryResponseModel();
        if (response.continue) {
            const {sroffset = 0} = response.continue;
            model._nextOffset = sroffset;
        }
        const {query} = response
        if (query) {
            const {searchinfo, search,} = query
            if (searchinfo) {
                const {totalhits = 0} = searchinfo;
                model._totalRecords = totalhits;
            }
            if (search) {
                const records = []
                search.map(item => {
                    const queryModel = QueryResultModel.fromResponse(item)
                    records.push(queryModel)
                })
                model._items = records;
            }
        }

        return model;
    };
}
