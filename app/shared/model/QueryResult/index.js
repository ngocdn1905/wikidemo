export default class QueryResultModel {
    _title;
    _pageId;
    _snippet;

    static fromResponse = (response) => {
        const {title, pageid, snippet} = response;
        const model = new QueryResultModel();
        model._title = title;
        model._pageId = pageid;
        model._snippet = snippet;
        return model;
    };
}
