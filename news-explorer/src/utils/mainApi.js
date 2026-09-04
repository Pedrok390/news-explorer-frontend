class Api{
    constructor(options){
        this._baseUrl = options.baseUrl
        this._headers = options.headers
        this._token = ''
    }
    setToken(token){
        this._token = token;
    }
    _getHeaders() {
        return {
        ...this._headers,
        Authorization: `Bearer ${this._token}`,
        };
    }
    _checkResponse(res) {
       return res.json().then((data) => {

        if (!res.ok) {
            return Promise.reject(data);
        }

        return data;
    });
    }
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._getHeaders(),
        }).then(this._checkResponse)
    }
    getMyCards() {
        return fetch(`${this._baseUrl}/cards/me`, {
            headers: this._getHeaders(),
        }).then(this._checkResponse)
    }
    addCard(data, keyword) {
        return fetch(`${this._baseUrl}/cards/`, {
            method: "POST",
            headers: this._getHeaders(),
            body: JSON.stringify({
            keyword,
            author: data.author,
            content: data.content,
            description: data.description,
            publishedAt: data.publishedAt,
            source: data.source,
            title: data.title,
            url: data.url,
            urlToImage: data.urlToImage,
            }),
        }).then(this._checkResponse)
    }
    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
        method: "DELETE",
        headers: this._getHeaders(),
        }).then(this._checkResponse);
    }
}
const api = new Api({
  baseUrl: "https://api.newsdomain.chickenkiller.com",
  headers: {
    "Content-Type": "application/json",
  },
});
export {api};
