import api from '../../services/api';

export default class AccountController {
  private static instance: AccountController;
  private token: string = '';

  private constructor() { }

  private config = {
    headers: { Authorization: `Bearer ${this.token}` }
  };

  public setToken(token: string): void {
    this.token = token;
  }

  public getToken(): string {
    return this.token;
  }

  public static getInstance(): AccountController {
    if (!AccountController.instance)
      AccountController.instance = new AccountController();
    
    return AccountController.instance;
  }

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

  async delete(id: number) {
    this.config.headers = { Authorization: `Bearer ${this.token}` }
    console.log(this.config.headers);
    try {
      const response = await api.delete('accounts/'+id, this.config);
      return response;
    } catch(error) {
      console.log('error', error);
      return error;
    }
  }
}
