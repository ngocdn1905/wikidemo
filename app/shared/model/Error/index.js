export default class ErrorModel {
    _type;
    _message;
    _code;
    static fromError = (error) => {
        const {type, message, code} = error;
        const model = new ErrorModel();
        model._type = type;
        model._message = message;
        model._code = code;
        return model;
    };
}
