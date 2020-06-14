import GenericApi from '../generic.api';
import RequestInstance from '../request-instance';
import querystring from "qs";

export default class ActivitiesApi extends GenericApi {
    static url = '/v3/users/5411bab0c8e1e7656f4ff291/activities';

    constructor() {
        super(ActivitiesApi.url)
    }

    getAll = query => RequestInstance.get(`${ActivitiesApi.url}?${querystring.stringify(query)}`);
}
