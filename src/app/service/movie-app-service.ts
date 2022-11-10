export default class MovieAppService {
  public async getNowPlaying(): Promise<any> {
    const response = await fetch('https://excel2json.io/api/share/15755be7-cee3-4b74-4382-08da496bf5f2');
    if (!response.ok) {
      return Promise.reject('Data load failed.');
    }
    return response.json();
  }

  public async getMovieList(): Promise<any> {
    const response = await fetch('https://excel2json.io/api/share/99cd7568-0b49-4c09-4387-08da496bf5f2');
    if (!response.ok) {
      return Promise.reject('Data load failed.');
    }
    return response.json();
  }

  public async getTheatres(): Promise<any> {
    const response = await fetch('https://excel2json.io/api/share/5435e256-3846-4895-4385-08da496bf5f2');
    if (!response.ok) {
      return Promise.reject('Data load failed.');
    }
    return response.json();
  }

  public async getShowtimes(): Promise<any> {
    const response = await fetch('https://excel2json.io/api/share/f179620a-3bb6-49cd-4384-08da496bf5f2');
    if (!response.ok) {
      return Promise.reject('Data load failed.');
    }
    return response.json();
  }

  public async getTheatresNearYou(): Promise<any> {
    const response = await fetch('https://excel2json.io/api/share/49f543dc-9c4e-43e8-4386-08da496bf5f2');
    if (!response.ok) {
      return Promise.reject('Data load failed.');
    }
    return response.json();
  }

  public async getMyPurchases(): Promise<any> {
    const response = await fetch('https://excel2json.io/api/share/3f89384c-e58f-429a-4388-08da496bf5f2');
    if (!response.ok) {
      return Promise.reject('Data load failed.');
    }
    return response.json();
  }
}
