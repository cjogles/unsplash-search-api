import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID wF6k3MCGFdSSr0hQ3FsUz9uwdQJvocGKNKjXO0d_z3w',
  }
});