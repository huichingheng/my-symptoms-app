export default class InfermedicaApi {
  constructor (apiModel = 'infermedica-en', apiUrl = 'https://api.jumpstart.site/api.infermedica.com/v2/') {
    this.apiUrl = apiUrl;
    this.apiModel = apiModel;
  }

  _req (method, url, data) {
    let headers = new Headers();
    headers.append('Model', this.apiModel);
    headers.append('Content-Type', 'application/json');

    return fetch(this.apiUrl + url, {
      method,
      headers,
      body: data
    }).then((response) => {
      return response.json();
    });
  }


  _post (url, data) {
    return this._req('POST', url, data);
  }


  parse (text) {
    return this._post('parse', JSON.stringify({'text': text}));
  }

  diagnosis (data) {
    return this._post('diagnosis', JSON.stringify(data));
  }

  
}
