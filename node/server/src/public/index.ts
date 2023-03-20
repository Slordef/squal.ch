import { makeApplication } from '../main/factories/application/make-application';
import { ExpressPlugin } from '../infra/api/express/express-plugin';
import { BcryptPlugin } from '../infra/cryptography/bcrypt/bcrypt-plugin';
import { JwtPlugin } from '../infra/cryptography/jwt/jwt-plugin';
import { SequelizePlugin } from '../infra/database/sequelize/sequelize-plugin';
import { NodemailerPlugin } from '../infra/mails/nodemailer/nodemailer-plugin';

makeApplication(
	ExpressPlugin,
	SequelizePlugin,
	BcryptPlugin,
	JwtPlugin,
	NodemailerPlugin
);