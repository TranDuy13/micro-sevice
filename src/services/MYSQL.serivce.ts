import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

@Injectable()
export class MYSQLService implements OnModuleInit, OnModuleDestroy {
  private connectionPool: mysql.Pool;

  async onModuleInit() {
    this.connectionPool = mysql.createPool({
      host: 'localhost',
      user: 'your_username',
      password: 'your_password',
      database: 'your_database',
    });
  }

  async onModuleDestroy() {
    await this.connectionPool.end();
  }

  async query(sql: string, params?: any[]): Promise<any> {
    const [results] = await this.connectionPool.execute(sql, params);
    return results;
  }
}
