import dotenv from 'dotenv';

dotenv.config();

export default class Config {
  static HTTP_PORT = process.env.HTTP_PORT || 5001;
  static BASE_URL = `${process.env.BASE_URL}`;
  static DATABASE_URL = `${process.env.DATABASE_URL}`;
  static SERVER_TOKEN_SECRET = `${[process.env.SERVER_TOKEN_SECRET]}`;
}
