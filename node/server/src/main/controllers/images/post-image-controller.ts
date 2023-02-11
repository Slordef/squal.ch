import { Controller } from '../../../domain/controller/controller';
import { HttpRequest } from '../../../domain/protocols/http-request';
import { HttpResponse } from '../../../domain/protocols/http-response';
import { serverInternalError } from '../../helper/server-internal-error';
import { ok } from '../../helper/ok';
import { notFound } from '../../helper/not-found';
import { FileHandler } from '../../../domain/contracts/files/file-handler';
import { AddImage } from '../../../domain/contracts/database/images/add-image';

export class PostImageController implements Controller {

	constructor(
        private readonly fileHandler: FileHandler,
        private readonly addImage: AddImage,
	) {
	}

	async handle(request: HttpRequest): Promise<HttpResponse> {
		try {
			if (!request.files) {
				return notFound();
			}

			const names = await this.fileHandler.handle(request.files);

			const images = [];
			for (const name of names) {
				images.push(await this.addImage.add({
					name,
					link: name,
					description: ''
				}));
			}

			return ok(images);
		} catch (error) {
			return serverInternalError(error);
		}
	}

}