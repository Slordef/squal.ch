import { ContactController } from '../../../controllers/contact/contact-controller';
import { ContactValidation } from '../../../validations/contact-validation';
import { makeMailer } from '../../mails/make-mailer';

export function makeContactController() {
	return new ContactController(
		new ContactValidation(),
		makeMailer()
	);
}