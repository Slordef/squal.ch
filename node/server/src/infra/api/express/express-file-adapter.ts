import { FileHandler } from '../../../domain/contracts/files/file-handler';
import { UploadedFile } from 'express-fileupload';
import { file_path } from '../../../main/config';
import { Files } from '../../../main/files/files';

export class ExpressFileAdapter implements FileHandler {
	async handle(files: any): Promise<string[]> {
		if (files == null) {
			return Promise.reject(null);
		}

		const field = files.field;
		if (this.isMultipleFiles(field)) {
			const names = [];
			for (const file of field) {
				const name = Files.changeName(file.name);
				file.mv(`${file_path}${name}`);
				names.push(name);
			}
			return names;
		} else {
			const name = Files.changeName(field.name);
			field.mv(`${file_path}${name}`);
			return [name];
		}
	}

	private isMultipleFiles(file: UploadedFile | UploadedFile[]): file is UploadedFile[] {
		return Array.isArray(file);
	}
}