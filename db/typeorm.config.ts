import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 3306, 
  username: process.env.DB_USERNAME, 
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_DATABASE,
  entities: [`${__dirname}/../src/**/*.entity{.ts,.js}`],
  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV === 'development',
  migrations: [`${__dirname}/migrations/*{.ts,.js}`],
  migrationsTableName: 'migrations',
});





