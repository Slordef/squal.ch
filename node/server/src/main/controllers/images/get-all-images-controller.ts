import { Controller } from '../../../domain/controller/controller';
import { HttpRequest } from '../../../domain/protocols/http-request';
import { HttpResponse } from '../../../domain/protocols/http-response';
import { GetAllImages } from '../../../domain/contracts/database/images/get-all-images';
import { ok } from '../../helper/ok';
import { serverInternalError } from '../../helper/server-internal-error';

export class GetAllImagesController implements Controller {

	constructor(
        private readonly getAllImages: GetAllImages
	) {
	}

	async handle(request: HttpRequest): Promise<HttpResponse> {
		try {
			const images = await this.getAllImages.getAll();
			return ok(images);
		} catch (error) {
			return serverInternalError(error);
		}
	}
}