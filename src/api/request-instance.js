import axios from 'axios';

const { BASE_API_URL } = process.env;

export default class RequestInstance {
    static instance = axios.create({
        baseURL: BASE_API_URL || 'http://localhost:1337',
        timeout: 10000,
    });

    static get = url => RequestInstance.instance.get(url);

    static post = (url, payload) => RequestInstance.instance.post(url, payload);

    static put = (url, payload) => RequestInstance.instance.put(url, payload);

    static delete = (url) => RequestInstance.instance.delete(url);
}
