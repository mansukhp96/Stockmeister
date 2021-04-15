import axios from 'axios';

const PeopleService = axios.create({ baseURL : "http://localhost:5000" });

export const findAllUsers = () => PeopleService.get('/api/users/all');
export const getUserInfo = (id) => PeopleService.get('/api/users/info/'+ id);
export const updateUser = (id, updateForm) => PeopleService.post('/api/users/update/' + id, updateForm);
export const updateFollowing = (id, following) => PeopleService.post('/api/users/updateFollowing/' + id, following);
export const removeFollowing = (id, following) => PeopleService.post('/api/users/deleteFollowing/' + id, following);
export const removeFollower = (id, follower) => PeopleService.post('/api/users/deleteFollower/' + id, follower);
export const updateFollower = (id, follower) => PeopleService.post('/api/users/updateFollower/' + id, follower);
export const deleteUser = (id) => PeopleService.post('/api/users/delete/' + id);