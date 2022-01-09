import axios from 'axios';

const KEY = 'AIzaSyAkapCj3QN8DLKaBsyCBiXVNMyj4gugUfE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});