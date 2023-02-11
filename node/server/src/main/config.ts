import { Dialect } from 'sequelize';

export const saltRounds = 12;
export const secret = process.env.JWT_SECRET || 'secret';
export const port = parseInt(process.env.PORT || '3000');
export const database_type: Dialect = 'mariadb';
export const database_host = process.env.DATABASE_HOST || 'db';
export const database_port = parseInt(process.env.DATABASE_PORT || '3306');
export const database_username = process.env.DATABASE_USERNAME || 'test';
export const database_password = process.env.DATABASE_PASSWORD || 'test';
export const database_database = process.env.DATABASE_DATABASE || 'test';
export const mail_host = process.env.MAIL_HOST || 'smtp.mailtrap.io';
export const mail_username = process.env.MAIL_USERNAME || 'test';
export const mail_password = process.env.MAIL_PASSWORD || 'test';
export const mail_from = process.env.MAIL_FROM || '"Test" <from@test.com>';
export const file_path = process.env.FILE_PATH || 'public/static/';
export const admin_password = process.env.ADMIN_PASSWORD || 'adminpassword';
export const admin_email = process.env.ADMIN_EMAIL || 'admin@localhost.com';