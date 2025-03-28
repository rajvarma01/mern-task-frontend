import axios from 'axios';

const API_URL = 'http://localhost:5000/auth';

export const registerCustomer = async (userData) => {
    const data = {
        ...userData,
        role:'customer'
    }
  return axios.post(`${API_URL}/register`, data);
};

export const registerAdmin = async (userData) => {
    const data = {
        ...userData,
        role:'admin'
    }
  return axios.post(`${API_URL}/register`, data);
};

export const loginAdmin = async (userData) => {
  return axios.post(`${API_URL}/admin-login`, userData);
};
