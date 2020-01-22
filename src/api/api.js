import axios from "axios";


class Api {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:5000/'
    });
  }
  
  getFilms = () => {
    return this.instance.get('filmsList');
  };
  
  postCreateFilms = (id, film) => {
    return this.instance.post(`filmsList`, film);
  };
}

const API = new Api();

export default API;
