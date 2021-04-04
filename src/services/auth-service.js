import axios from 'axios';

const AuthService = axios.create({ baseURL : "http://localhost:5000" });

export const login = (loginFormData) => AuthService.post('/api/auth/login', loginFormData);
export const register = (formData) => AuthService.post('/api/auth/register', formData);
export const gglLogin = (token) => AuthService.post('/api/auth/google-login', token);