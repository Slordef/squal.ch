import { Validation } from '../../domain/usecases/validation';
import { LoginParam } from '../../domain/parameters/login-param';

export class LoginValidation implements Validation {
	check(input: LoginParam): Error | null {
		try {
			console.log(input);
			LoginParam.parse(input);
			return null;
		} catch (error) {
			return new Error();
		}
	}

}