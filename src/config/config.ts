import { config } from 'dotenv';

config(); // Load environment variables from .env file
export class AppConfig {
  readonly DATABASE_URL: string;
  readonly JWT_SECRET: string;
  readonly PORT: number;
  readonly VERSION_APP: string;

  constructor() {
    this.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/mydb';
    this.JWT_SECRET = process.env.JWT_SECRET || 'mysecretkey';
    this.PORT = parseInt(process.env.PORT, 10);
    this.VERSION_APP = process.env.VERSION_APP;
  }
}
