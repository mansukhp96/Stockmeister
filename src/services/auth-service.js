import axios from 'axios';

const AuthService = axios.create({ baseURL : process.env.REACT_APP_STOCKMEISTER_SERVER });

export const login = (loginFormData) => AuthService.post('/api/auth/login', loginFormData);
export const register = (formData) => AuthService.post('/api/auth/register', formData);
export const gglLogin = (formData) => AuthService.post('/api/auth/google-login', formData);