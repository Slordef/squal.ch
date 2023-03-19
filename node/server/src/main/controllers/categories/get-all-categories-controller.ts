import { Controller } from '../../../domain/controller/controller';
import { HttpResponse } from '../../../domain/protocols/http-response';
import { GetAllCategories } from '../../../domain/contracts/database/category/get-all-categories';
import { ok } from '../../helper/ok';
import { serverInternalError } from '../../helper/server-internal-error';

export class GetAllCategoriesController implements Controller {
	constructor(
        private readonly getAllCategories: GetAllCategories,
	) {
	}

	async handle(): Promise<HttpResponse> {
		try {
			const categories = this.getAllCategories.getAll();
			return ok(categories);
		} catch (e) {
			return serverInternalError(e);
		}
	}
}