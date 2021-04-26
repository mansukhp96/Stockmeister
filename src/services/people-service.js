import axios from 'axios';

const PeopleService = axios.create({ baseURL : process.env.REACT_APP_STOCKMEISTER_SERVER });

export const findAllUsers = () => PeopleService.get('/api/users/all');
export const getUserInfo = (id) => PeopleService.get('/api/users/info/'+ id);
export const updateUser = (id, updateForm) => PeopleService.post('/api/users/update/' + id, updateForm);
export const deleteUser = (id, account) => PeopleService.post('/api/users/delete/' + id, account);

export const updateFollowing = (id, following) => PeopleService.post('/api/users/updateFollowing/' + id, following);
export const updateFollower = (id, follower) => PeopleService.post('/api/users/updateFollower/' + id, follower);

//Update Trader's Manager and Manager's client
export const updateTrader = (id, manager) => PeopleService.post('/api/users/updateTrader/' + id, manager);
export const updateManager = (id, client) => PeopleService.post('/api/users/updateManager/' + id, client);

//Remove Trader's Manager and Manager's client
export const removeTrader = (id, manager) => PeopleService.post('/api/users/deleteTrader/' + id, manager);
export const removeManager = (id, client) => PeopleService.post('/api/users/deleteManager/' + id, client);

export const removeFollowing = (id, following) => PeopleService.post('/api/users/deleteFollowing/' + id, following);
export const removeFollower = (id, follower) => PeopleService.post('/api/users/deleteFollower/' + id, follower);

export const getUserFollowers = (id) => PeopleService.get('/api/users/' + id + '/followers');
export const getUserFollowing = (id) => PeopleService.get('/api/users/' + id + '/following');

export const getManagerClients = (id) => PeopleService.get('/api/users/' + id + '/clients');