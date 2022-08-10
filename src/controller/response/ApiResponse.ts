export default class ApiResponse {
    type: string;
    response: string;

    constructor(_data: string) {
        this.type = "success";
        this.response = _data;
    }
}