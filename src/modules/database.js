import mongoose from 'mongoose';
import Config from '../config/config.js';

class ModuleDatabase {
  static async connect() {
    return new Promise((res, rej) => {
      mongoose.set('strictQuery', false);
      mongoose
        .connect(Config.DATABASE_URL)
        .then(() => res())
        .catch((err) =>
          rej(` [server_error] Failed to connect to database: ${err}`)
        );
    });
  }
}

export default ModuleDatabase;
