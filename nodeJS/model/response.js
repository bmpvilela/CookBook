class Response {
    constructor(status = false, code = 200, message = "", data = null) {
        this.status = status;
        this.code = code;
        this.message = message;
        this.data = data;
    }
}

// EXPORT

export default class { Response };