import axios from 'axios';

const PeopleService = axios.create({ baseURL : "http://localhost:5000" });

export const findAllUsers = () => PeopleService.get('/api/users/all');
export const getUserInfo = (id) => PeopleService.get('/api/users/info/'+ id);
export const updateUser = (id, updateForm) => PeopleService.post('/api/users/' + id, updateForm);