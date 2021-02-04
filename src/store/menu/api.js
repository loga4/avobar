import axios from 'axios';

export const fetchData = () =>
  axios.get('https://cheqit.app/chains/1').then((res) => res.data);
