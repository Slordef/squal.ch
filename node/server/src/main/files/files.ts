import * as fs from 'fs';
import { file_path } from '../config';

export class Files {
	public static changeName(filename: string): string {
		this.filepathExists();

		const filenameSplit = filename.split('.');
		const extension = filenameSplit.pop();
		const beforeName = filenameSplit.join('.');
		let name = beforeName;
		let n = 1;
		while (this.fileExists(name)) {
			name = `${beforeName}(${n})`;
			n++;
		}
		name = `${name}.${extension}`;

		return name;
	}

	public static async storeFile(file: any, filename: string): Promise<string> {
		this.filepathExists();

		const name = this.changeName(filename);

		fs.writeFileSync(`${file_path}${name}`, file);

		return name;
	}

	private static filepathExists(): void {
		if (!fs.existsSync(file_path)) {
			fs.mkdirSync(file_path);
		}
	}

	private static fileExists(filename: string): boolean {
		return fs.existsSync(`${file_path}${filename}`);
	}
}