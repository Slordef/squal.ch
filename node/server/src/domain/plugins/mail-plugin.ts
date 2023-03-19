import { Mailer } from '../contracts/mails/mailer';

export interface MailPlugin {
    mailer: Mailer;
}