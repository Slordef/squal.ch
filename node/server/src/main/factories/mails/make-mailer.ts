import { NodemailerAdapter } from '../../../infra/mails/nodemailer/nodemailer-adapter';
import { mail_from, mail_host, mail_password, mail_username } from '../../config';

export function makeMailer() {
	return new NodemailerAdapter(
		mail_host,
		mail_username,
		mail_password,
		mail_from
	);
}