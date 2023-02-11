import { Validation } from '../../domain/usecases/validation';
import { ContactParam } from '../../domain/parameters/contact-param';

export class ContactValidation implements Validation {
	check(input: any): Error | null {
		try {
			ContactParam.parse(input);
			return null;
		} catch (error) {
			return new Error();
		}
	}
}