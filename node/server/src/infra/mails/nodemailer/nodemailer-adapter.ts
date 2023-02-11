import { Mailer } from '../../../domain/contracts/mails/mailer';
import nodemailer from 'nodemailer';

export class NodemailerAdapter implements Mailer {
	constructor(
		private readonly hostname: string,
		private readonly username: string,
		private readonly password: string,
		private readonly from: string
	) {
	}

	async send(to: string, subject: string, body: string): Promise<boolean> {
		const transporter = nodemailer.createTransport({
			host: this.hostname,
			port: 587,
			secure: false,
			auth: {
				user: this.username,
				pass: this.password
			},
			tls: {
				rejectUnauthorized: false
			}
		});

		const info = await transporter.sendMail({
			from: this.from,
			to,
			subject,
			html: body
		});

		return info.response.includes('250');
	}

}