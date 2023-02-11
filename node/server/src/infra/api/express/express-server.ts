import express, { Express } from 'express';
import cors from 'cors';
import { AppServer } from '../../../domain/api/app-server';

export class ExpressServer implements AppServer {
	private app: Express;

	constructor(private port: number) {
		this.app = express();
		this.app.use('/static', express.static('public/static'));
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(cors());
		this.app.use((req, res, next) => {
			console.log(`${req.method} ${req.url}`);
			next();
		});
	}

	public setup(): void {
		this.app.all('*', (req, res) => {
			res.status(404).json({ message: 'Not found' });
		});
	}

	public start() {
		this.app.listen(this.port, () => {
			console.log(`Server is running on port ${this.port}`);
		});
	}

	getApp(): any {
		return this.app;
	}

}