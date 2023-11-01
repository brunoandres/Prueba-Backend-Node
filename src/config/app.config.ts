import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  port: 3000,
  nodenv: process.env.NODE_ENV,
}));
