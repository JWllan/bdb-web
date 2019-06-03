const BaseURL = 'http://localhost:3007/';

export default class BaseService {
    constructor (controller) {
        this.URL = BaseURL + controller;
    }
}