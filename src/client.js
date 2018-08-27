import axios from 'axios';
const apiUrl = 'https://venbest-test.herokuapp.com';

export const fetchPersons = () => axios.get(apiUrl);