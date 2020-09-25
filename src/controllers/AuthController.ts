import api from '../services/api';

export default class AuthController {
  async login(email: string, password: string) {
    try {
      return await api.post('/login', { email, password });
    } catch(error) {
      return error;
    }
  };

  async register(name: string, email: string, phone_number: string, password: string) {
    try {
      return await api.post('/register', { name, email, phone_number, password });
    } catch(error) {
      return error;
    }
  }
}
