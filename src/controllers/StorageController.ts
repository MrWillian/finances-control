import storage from '../services/storage';

export default class StorageController {
  async setItem(key: string, value: any) {
    try {
      const data = JSON.stringify(value);
      await storage.save({ key, data });
      return true;
    } catch(error) {
      return error;
    }
  };

  async getItem(key: string) {
    try {
      const jsonValue = await storage.load({ key });
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(error) {
      return error;
    }
  }
}
