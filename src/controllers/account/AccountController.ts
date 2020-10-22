import api from '../../services/api';

export default class AccountController {
  private token: string = '';

  constructor(token: string) {
    this.token = token;
  }

  private config = {
    headers: { Authorization: `Bearer ${this.token}` }
  };

  async index() {
    try {
      const response = await api.get('accounts', this.config);
      const responseData = JSON.stringify(response.data.data);
      return JSON.parse(responseData);
    } catch(error) {
      return error;
    }
  }

  async create(name: string, description: string, amount: number, token?: string) {
    this.config.headers = { Authorization: `Bearer ${token}` }
    try {
      const response = await api.post('accounts', { name, description, amount }, this.config);
      return response;
    } catch(error) {
      console.log('error', error);
      return error;
    }
  }
}
