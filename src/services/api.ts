import axios from 'axios';

export default axios.create({
  baseURL: `https://finances-control-api.herokuapp.com/api/`
});
