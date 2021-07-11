import http from './http'

export default class AbstractHttpService {
  public _http: typeof http

  constructor () {
    this._http = http
  }
}
