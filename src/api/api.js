import axios from 'axios';

const API = axios.create({ baseURL : "http://localhost:5000" });

export const login = (loginFormData) => API.post('/users/login', loginFormData);
export const register = (formData) => API.post('/users/register', formData);