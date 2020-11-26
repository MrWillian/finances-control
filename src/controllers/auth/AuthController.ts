import api from '../../services/api';

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
      console.log(error);
      return error;
    }
  }

  async delete(token: string, id?: number) {
    try {
      const response = await api.delete('delete/users/'+id, { headers: { Authorization: `Bearer ${token}` } });
      return response;
    } catch(error) {
      console.log('error', error);
      return error;
    }
  }
}
