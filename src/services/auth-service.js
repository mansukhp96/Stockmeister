import axios from 'axios';

const AuthService = axios.create({ baseURL : "http://localhost:5000" });

export const login = (loginFormData) => AuthService.post('/users/login', loginFormData);
export const register = (formData) => AuthService.post('/users/register', formData);
export const gglLogin = (token) => AuthService.post('/users/google-login', token);