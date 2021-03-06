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
  
  getFilm = id => {
    return this.instance.get(`filmsList/${id}`);
  };
  
  postCreateFilms = (film) => {
    return this.instance.post(`filmsList`, film);
  };
  
  deleteFilm = (id) => {
    return this.instance.delete(`filmsList/${id}`);
  };
  
  updateFilm = (id, film) => {
    return this.instance.put(`filmsList/${id}`, film);
  };
}

const API = new Api();

export default API;
