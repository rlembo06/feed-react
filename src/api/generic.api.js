import RequestInstance from 'api/request-instance';
import querystring from 'qs';

export default class GenericApi {
  constructor(url) {
    this.url = url;
  }

  getAll = query => RequestInstance.get(`${this.url}?${querystring.stringify(query)}`);

  getByID = id => RequestInstance.get(`${this.url}/${id}`);

  update = item => RequestInstance.put(`${this.url}/${item && item.id}`, item);

  add = item => RequestInstance.post(this.url, item);

  deleteById = id => RequestInstance.delete(`${this.url}/${id}`);

  getMany = (ids, query) => RequestInstance.post(`${this.url}/many?${querystring.stringify(query)}`, ids);
}
