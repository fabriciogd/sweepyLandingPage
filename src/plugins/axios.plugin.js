import axios from 'axios';

export default {
  default() {
    return axios.create({
      baseURL : 'https://api.sendpulse.com',
      headers : {
        Accept         : 'application/json',
        'Content-Type' : 'application/json',
      }
    });
  }
};
